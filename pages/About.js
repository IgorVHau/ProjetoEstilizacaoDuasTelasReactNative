import React from 'react';
import AddButton from '../components/AddButton/AddButton';
import DescriptionImage from '../components/DescriptionImage/DescriptionImage';
import FooterTabs from '../components/FooterTabs/FooterTabs';
import HeaderTabs from '../components/HeaderTabs/HeaderTabs';


export default function About() {
    return (
        <>
        <HeaderTabs />
        <DescriptionImage />
        <AddButton />
        
        <FooterTabs />
        
    </>

    )
  
}