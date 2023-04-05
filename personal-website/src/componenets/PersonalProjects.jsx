import Link from 'next/link';
import React from 'react'

const PersonalProjects = () => {
    return (
        <div>
            <div className="site-text">
                <h2 className="mt-5"> Working on Currently... </h2>
                <h3 className="mt-5"> Project: NFT Avertisement Marketplace</h3>
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
                    The application is hosted currently on <mark>AWS using the lightsail service</mark>. Lightsail allows for easy deployment of clusters of
                    nodes whether they be <mark>EC2s or Docker containers</mark>. For the purpose of this project I am hosting the fronend application on an EC2
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
                <p>
                    This project utilizes <mark>solidity smart contracts</mark> to facilitate a betting event in which users can either bet that the price of a cryptocurrency 
                    (specifically BTC/ETH at the moment) will be above or below the price mark that is selected prior to event start. At the moment only 6 hour events 
                    are in use. This project does not seek to necessarily solve any problems but more so a fun and simple concept that I am looking to build out further 
                    to include other betting markets such as sports, e-sports, and outcome of world events.
                </p>
                <p>
                    The frontend of the application is built in javascript using the <mark>NextJs REACT framework</mark>. The frontend utilizes <mark>EthersJs</mark> to allow the user
                    to connect their metamask wallet in order to place bets, and allow the frontend to interact with the deployed contracts to get live info on the contract.
                    The frontend application communicates with a backend server written in python <mark>(flask_smorest)</mark> which is really just an interface to the MongoDB 
                    <mark>(pymongo)</mark> that provides the price data for BTC and ETH as well as static info on the deployed event contracts.
                </p>
                <p>
                    In order to get the live price data and deploy the betting event contracts an additional python application is run indefinitely. The application is split in to 
                    two jobs that run in parallel via multiprocessing. The prices job makes requests to various crypto price APIs and populates the MongoDB with those prices. 
                    The event deployer job handles the deploying of the smart contracts that facilitate the betting events, periodically checking if the contract is complete of not 
                    and deploying as needed <mark>(Web3Py, py-solc )</mark>. Essentially these jobs provide a source of truth for the rest of the application stack.
                </p>
                <p>
                    The application is hosted on <mark>AWS via the lightsail service</mark>. For the purpose of this project I am hosting the frontend application on an EC2
                    that utilizes <mark>apache</mark>. The backend application is running via docker containers where an additional <mark>nginx container</mark> sits at
                    forefront of the backend to route traffic. The python application that runs the jobs at the moment is run while through my workspace so that as it still has a tweaking 
                    needed before I can leave it alone to run 24/7. The plan is to split the jobs up in to their own applications that will run in docker containers that will be deployed 
                    alongside the backend server.
                </p>
                <p> This application is still a work in progress... </p>
                <h5> Demo coming soon... </h5>
                <ul>
                    <li>
                        <Link href="https://github.com/j1m5s3/over-under-betting-fe"> Frontend </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/j1m5s3/over-under-betting-be"> Backend </Link>
                    </li>
                    <li>
                        Jobs (concealed, to be moved to public repo(s) soon...)
                    </li>
                    <li> 
                        <Link href="http://52.204.42.160/"> Current public build... </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default PersonalProjects;