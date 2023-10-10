"use client"
import { CarList, CarsFiltersOption, Hero, SearchInput } from '@/components'
import ToastMsg from '@/components/ToastMsg';
import { getCarsList } from '@/types';
import {useEffect, useState} from 'react'
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";

export default function Home() {
  const [carsList,setCarsList]=useState<any>([])
  const [carsOrgList,setCarsOrgList]=useState<any>([])
  const [showToastMsg,setShowToastMsg]=useState<boolean>(false);
  useEffect(() => {
    getCarList_();
  }, [])
  

const getCarList_ = async ()=>{
  const result:any=await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists);
}

const filterCarList=(brand:string)=>{
  const filterList=carsOrgList.filter((item:any)=>
  item.carBrand==brand);
  setCarsList(filterList);
}

const orderCarList=(order:any)=>{
  const sortedData = [...carsOrgList].sort((a, b) =>
  order==-1? a.price - b.price:b.price - a.price);
  setCarsList(sortedData);
}

useEffect(()=>{
  if(showToastMsg)
  {
    setTimeout(function(){
      setShowToastMsg(false)
    },4000);
  }
},[showToastMsg])

  return (
    <main className="overflow-hidden">
      <BookCreatedFlagContext.Provider value={{showToastMsg,setShowToastMsg}}>
     <Hero />

     <SearchInput />
     <CarsFiltersOption carsList={carsOrgList}
        orderCarList={(value:string)=>orderCarList(value)}
        setBrand={(value:string)=>filterCarList(value)}/>
     <CarList carsList={carsList}/>
     {showToastMsg?<ToastMsg msg={'Booking Created Successfully!'} />:null}
    </BookCreatedFlagContext.Provider>
    </main>
  )
}
