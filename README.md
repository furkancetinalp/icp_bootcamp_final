<h1><code style="color : cyan">NFT Minting Depending on the City and Weather Conditions</code></h1>


<h3>This project aimed to approach NFT-related transactions from a different perspective. 
<br/>
It is a program that decides whether the transaction will be made or not during NFT transactions based on the information received from external API sources.
<br/>
This project aims to be a software project that enables the resources in the Web2 ecosystem to be integrated into the blockchain ecosystem with ICP.
<br/>
<br/>
</h3>
STORY

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
