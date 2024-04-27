'use client'

import React, { useEffect, useState } from 'react'
import AuctionCard from './AuctionCard';
import { Auction } from '@/types';
import AppPagination from '../components/AppPagination';
import { getData } from '../actions/auctionAction';
import Filters from './Filters';

export default function Listings() {


  useEffect(()=> {
    getData(pageNumber, pageSize).then(data => {
      setAuctions(data.results);
      setPageCount(data.pageCount)
    })
  }, [pageNumber, pageSize])

  if(auctions.length === 0) return <h3>Loading...</h3>
  
  return (
    <>
      <Filters pageSize={pageSize} setPageSize={setPageSize}/>
      <div className='grid grid-cols-4 gap-5'>
      {auctions.map( auction => (
          <AuctionCard auction={auction} key={auction.id}/> 
      ))}
      </div>
      <div className='flex justify-center mt-4'>
        <AppPagination pageChanged={setPageNumber} currentPage={pageNumber} pageCount={pageCount} />
      </div>
    </>
  )
}
