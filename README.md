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
<br/>
City => Any name;
<br/>
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

![1](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/1c276c0b-12f8-46ea-ae1e-cda33eebcc74)

On the right side, certain cities can be searched to see weather data

![2](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/88dcff4a-2f98-4642-9ca3-d23cedaa163a)


In the input section, any city can be searched

![4](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/7c94eed5-0995-4d5b-ba18-1f00c773f4c6)


If a city that doesn't exist is entered

![5](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/3aeabca1-ed00-4e41-a109-390b85efd0b4)



<h2>APPLICATION (MINTING NFT)</h2>

In order to mint, we need to provide a principal, city name and the city's weather condition correctly.

If given principal, city and its current weather condition is correctly typed, mint is successful

![mint1](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/ca1c58a5-dc02-43f4-92d8-8ab75efbf043)

If a city that doesn't exist is minted, it will return CityNotFound error

![mint2](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/192087c0-bd71-4ddd-937b-077f006aceb1)

If related city's weather condition is typed wrong, it will return WeatherConditionNotMatched error

![mint3](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/989a68fc-8d21-49c7-90fe-9214d3a922ec)

If non-exist weather condition is typed, it will return NoSuchWeatherCondition error

![mint4](https://github.com/furkancetinalp/icp_bootcamp_final/assets/99509540/5da27154-74b3-43f8-a6b3-54da91f0d904)


