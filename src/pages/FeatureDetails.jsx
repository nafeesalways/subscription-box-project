import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/Homelayout/RightAside';
import FeatureDetailsCard from '../components/FeatureDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const FeatureDetails = () => {
    const data = useLoaderData()
    const {id} = useParams();
    const [feature,setFeature] = useState({})
    useEffect((()=>{
        const featureDetails = data.find(singleFeature =>singleFeature.id ==id);
        setFeature(featureDetails)
    }),[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 '>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>Feature Details</h2>
                    <FeatureDetailsCard feature={feature}></FeatureDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default FeatureDetails;