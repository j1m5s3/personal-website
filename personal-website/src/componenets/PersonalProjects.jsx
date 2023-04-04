import Link from 'next/link';
import React from 'react'

const PersonalProjects = () => {
    return (
        <div>
            <div className="site-text">
                <h3> Project: NFT Avertisement Marketplace</h3>
                <p>
                    The project utilizes <mark>solidity smart contracts</mark> that allow for Dutch style auctions such that advertisers and
                    advertisement space providers can exchange advertisement space for cryptocurrency (ETH, USDC, USDT, DAI, etc..)
                    The application trys to solve the problems of poor local advertising exposure and give businesses another
                    revenue stream.
                </p>
                <p>
                    The frontend of the application (UI) is written in javascript using the <mark>NextJS REACT</mark> framework which communicates with a
                    backend server written in <mark>python (flask_restful)</mark>. Operations such as contract creation <mark>(Web3Py, py-solc)</mark> 
                    and user account creation are handled by this server. Additionally this server also provides functionality for the user dashboard where they
                    can manage their advertisement media, owned spaces, or create new spaces. At the moment much of the data of the application
                    is stored within a <mark>MongoDB (pymongo)</mark> which is communicated with via an additional database server that is also written in
                    python <mark>(FastAPI)</mark>. The purpose of the database server is to act as an interface for the MongoBD but also a way to minimize
                    unique connections to the database ands distribute the load of the operations that take place when the user interacts
                    with the application.
                </p>
                <p>
                    The applicaiton is hosted currently on <mark>AWS using the lightsail service</mark>. Lightsail allows for easy deployment of clusters of
                    nodes whether they be <mark>EC2s or Docker containers</mark>. For the purpose of this project I'm hosting the fronend application on an EC2
                    that utilizes <mark>apache</mark>. The backend applications are running via docker containers where an additional <mark>nginx container</mark> sits at
                    forefront of the backend to route traffic.
                </p>
                <p> This application is still a work in progress... </p>
                <h5> Demo coming soon... </h5>
                <ul>
                    <li>
                        <Link href="https://github.com/j1m5s3/ad-api-FE-nextjs"> Frontend </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/j1m5s3/ad-api-be-public"> Backend </Link>
                    </li>
                    <li>
                        Database server (concealed, to be moved to public repo soon...)
                    </li>
                </ul>
                
                <h3 className='mt-5'> Project: Over Under Betting </h3>

            </div>
        </div>
    )
}

export default PersonalProjects;