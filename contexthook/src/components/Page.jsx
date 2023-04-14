import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = () => {

    return(
        <div className="page">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default Page;