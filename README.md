<h1><code style="color : cyan">NFT Minting Depending on the City and Weather Conditions</code></h1>

<h2>AIM</h2>

<h3 tyle="color : cyan">This project aimed to approach NFT-related transactions from a different perspective. 
<br/>
<br/>
It is a program that decides whether the transaction will be made or not during NFT transactions based on the information received from external API sources.
<br/>
<br/>
This project aims to be a software project that enables the resources in the Web2 ecosystem to be integrated into the blockchain ecosystem with ICP.
<br/>
<br/>
</h3>


<h2>STORY</h2>

Accordingly, the user enters city and weather information when minting the NFT.
City => Any name;
Weather Condition =>
    Thunderstorm,
    Drizzle,
    Rain,
    Snow,
    Atmosphere,
    Clear,
    Clouds

If city with given name is not found, CityNotFound error is returned.

If the entered weather condition is not one of the 7 components mentioned above,  NoSuchWeatherCondition error is returned.

If the current weather condition value of the entered city is not equal to the entered weather condition value,  WeatherConditionNotMatched error is returned.

<h2>INSTRUCTION</h2>

Start Dfx
```dfx start --clean```

Deploy dfx with initialization parameters
```dfx deploy --argument 'record{name="DFX Blobs";symbol="DFXB";custodians=null;logo=null}' icp_final_backend```

Build both frontend and backend
```dfx deploy```

<h2>APPLICATION (BEFORE MINTING NFT)</h2>

Front-end page
![1](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/cee8b3b1-4fa0-416d-a476-a6a0a5d864fd)

On the right side, certain cities can be searched to see weather data

![2](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/4c646e4f-f3ae-48b9-b63a-7f3f31354ab0)

In the input section, any city can be searched

![4](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/bb050fd6-bb1b-4c09-91b2-877878822a3c)

If a city that doesn't exist is entered

![5](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/bda2c84a-1a3e-4ed1-90e5-f538c004905f)


<h2>APPLICATION (MINTING NFT)</h2>

In order to mint, we need to provide a principal, city name and the city's weather condition correctly.
