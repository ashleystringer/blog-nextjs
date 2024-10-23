import React from 'react'
import { Fragment, ReactNode } from 'react';

export function Skeleton({
    short,
    inline
}:
{
    short?: boolean;
    inline?: boolean;
}
) {
  return (
    <div
    className='skeleton'
    style={{
        width: short ? "15em" : undefined,
        display: inline ? "incline-block" : undefined
    }}
    ></div>
  )
}

export function SkeletonButton(){
    return <div className="skeleton selection-btn"></div>;
}

export function SkeletonInput(){
    return <div className='skeleton skeleton-input'></div>;
}

export function SkeletonList({
    amount,
    children
}:{
    amount: number
    children: ReactNode
}
){
    return (
        <>
            {Array.from({length: amount}).map((_, i) => {
                <Fragment key={i}>{children}</Fragment>
            })}
        </>
    );
};