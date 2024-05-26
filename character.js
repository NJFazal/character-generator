function createCharacter(){
    let firstNames = [
            "Lulu",
            "Maeby",
            "Habibi",
            "Schatzie",
            "Liebling"
    ];
    let lastNames = [
        "McMeowmers",
        "De La Scratchpost",
        "Van Dumpster",
        "The Squishy",
        "McFlufflton"
    ];
    let backgrounds = [
        "Biscuit Baker",
        "Just A Cat",
        "Pirate",
        "Knight Of The Cat Condo",
        "Clown"
    ];
    let age = [
        "20",
        "30",
        "40",
        "50",
        "35"
    ];
    let dispositions = [
        "Stingy",
        "Brash",
        "Cynical",
        "Narcissistic",
        "Idiot"
    ];
    let clothing = [
        "Elegant Attire",
        "Weathered Attire",
        "Just a silly hat and a smock",
        "Armor",
        "Loin Cloth"
    ];
    let physicalDetails = [
        "Facial Scar",
        "Chipped Tooth",
        "Long Hair",
        "Missing Limb",
        "Limp"
    ]
    let strengths = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
    ];
    let dextarities = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
    ];
    let wills = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
    ];
    let healthPoints = [
        "2",
        "3",
        "4",
        "5",
        "6"
    ];
    let inventories = [
        "Cooking Utencils",
        "Compass",
        "Mapping Equipment",
        "Rations",
        "Matches"
    ]
    let additionalItems = [
        "Spell Book",
        "Runes Dictionary",
        "Toothpicks",
        "Random Ring Of Keys",
        "Squirt Gun",
        "Juggling Balls",
        "Soap"
    ];
    let specialAbilities = [
        "Can see 5 minutes into the future",
        "Hyper accurate sense of smell",
        "Can levetate up to 10 feet",
        "Very good at sewing",
        "Super knowledgable about fungi"
    ];
    let coins = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
    ]
    
    let randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let randomLastName = lastNames[Math.floor(Math.random() *  lastNames.length)];
    let randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    let randomAge = age[Math.floor(Math.random() * age.length)];
    let randomDisposition = dispositions[Math.floor(Math.random() * dispositions.length)];
    let randomAttire = clothing[Math.floor(Math.random() * clothing.length)];
    let randomPhysicalDetails = physicalDetails[Math.floor(Math.random() *  physicalDetails.length)];
    let randomStrength = strengths[Math.floor(Math.random() * strengths.length)];
    let randomDextarity = dextarities[Math.floor(Math.random() * dextarities.length)];
    let randomWill = wills[Math.floor(Math.random() * wills.length)];
    let randomHP = healthPoints[Math.floor(Math.random() * healthPoints.length)];
    let randomInventory = inventories[Math.floor(Math.random() * inventories.length)];
    let randomAdditionalItems = additionalItems[Math.floor(Math.random() * additionalItems.length)];
    let randomSpecialAbilities = specialAbilities[Math.floor(Math.random() * specialAbilities.length)];
    let randomCoin = coins[Math.floor(Math.random() * coins.length)];

    let characterHTML = 
    `
    <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card mb-3" style="border: none">
                <div class="input-group mb-3">
                    <div>
                        <span class="input-group-text" id="inputGroup-sizing-default" style="font-weight: bold; color: black">Character Name</span>
                    </div>
                    <div type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">${randomFirstName} ${randomLastName}</div>
                </div>
                <div class="input-group mb-3">
                    <div>
                        <span class="input-group-text" id="inputGroup-sizing-default" style="font-weight: bold; color: black">Background</span>
                    </div>
                    <div type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">${randomBackground}</div>
                </div>
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Start</th>
                            <th scope="col">Current</th>
                        </tr>
                        <tr>
                            <th scope="row" style="font-weight: bold; color: black; background-color: #aa8545; border-radius: 5px;">Strength</th>
                            <td>${randomStrength}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" style="font-weight: bold; color: black;background-color: #aa8545; border-radius: 5px;">Dexterity</th>
                            <td>${randomDextarity}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" style="font-weight: bold; color: black;background-color: #aa8545; border-radius: 5px;">Will</th>
                            <td>${randomWill}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" style="font-weight: bold; color: black;background-color: #aa8545; border-radius: 5px;">HP</th>
                            <td>${randomHP}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card mb-3" style="border: none">
                <table class="table">
                    <thead style="background-color: #aa8545; border-radius: 5px;">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" style="font-weight: bold; color: black;">Age</th>
                            <th scope="col" style="font-weight: bold; color: black;">Personality</th>
                            <th scope="col" style="font-weight: bold; color: black;">Attire</th>
                            <th scope="col" style="font-weight: bold; color: black;">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>${randomAge}</td>
                            <td>${randomDisposition}</td>
                            <td>${randomAttire}</td>
                            <td>${randomPhysicalDetails}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card" style="border: none">
                <table class="table">
                    <thead style="background-color: #aa8545; border-radius: 5px;">
                        <tr>
                            <th scope="col" style="font-weight: bold; color: black;"></th>
                            <th scope="col" style="font-weight: bold; color: black;">Inventory</th>
                            <th scope="col" style="font-weight: bold; color: black;">Additional Items</th>
                            <th scope="col" style="font-weight: bold; color: black;">Special Abilities</th>
                            <th scope="col" style="font-weight: bold; color: black;">Coin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>${randomInventory}</td>
                            <td>${randomAdditionalItems}</td>
                            <td>${randomSpecialAbilities}</td>
                            <td>${randomCoin}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
    `
    document.getElementById('character-container').innerHTML = characterHTML
}
createCharacter()