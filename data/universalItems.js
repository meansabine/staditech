// Universal items data
const universalItems = {
    weapon: [
        {
            name: "Compensator",
            cost: 1000,
            description: "+5% Weapon Power"
        },
        {
            name: "Plasma Converter",
            cost: 1000,
            description: "+10% Weapon Lifesteal"
        },
        {
            name: "Weapon Grease",
            cost: 1000,
            description: "+5% Attack Speed"
        },
        {
            name: "Ammo Reserves",
            cost: 1500,
            description: "+20% Max Ammo"
        },
        {
            name: "Frenzy Amplifier",
            cost: 1500,
            description: "Eliminations grant +10% Attack Speed and +15% Move Speed for 3s"
        },
        {
            name: "Aftermarket Firing Pin",
            cost: 3750,
            description: "+10% Attack Speed, +5% Move Speed"
        },
        {
            name: "Advanced Nanobiotics",
            cost: 4000,
            description: "+5% Weapon Power, after healing an ally, gain +10% Attack Speed for 3s"
        },
        {
            name: "Shieldbuster",
            cost: 4000,
            description: "+5% Weapon Power, after dealing damage to Shields or Armor grants +15% Attack Speed for 1s"
        },
        {
            name: "Stockpile",
            cost: 4000,
            description: "+5% Attack Speed, +25% Magazine Size"
        },
        {
            name: "Technoleech",
            cost: 4500,
            description: "+5% Weapon Power, +10% Weapon Lifesteal"
        },
        {
            name: "Icy Coolant",
            cost: 5000,
            description: "+10% Weapon Power, +5% Cooldown Reduction"
        },
        {
            name: "Talon Modification Module",
            cost: 5500,
            description: "+15% Weapon Power"
        },
        {
            name: "Codebreaker",
            cost: 9000,
            description: "+15% Weapon Power, Ignore 50% of Armor's damage reduction"
        },
        {
            name: "Salvaged Slugs",
            cost: 9500,
            description: "+10% Attack Speed, +25% Damage to Barriers, Weapon Damage to Barriers has a 40% chance to restore 1 ammo"
        },
        {
            name: "Volskaya Ordnance",
            cost: 9500,
            description: "+10% Attack Speed, deal 5% increased Weapon Damage for every 100 Max Life the target has more than you, up to 25%"
        },
        {
            name: "Commander's Clip",
            cost: 10000,
            description: "+10% Attack Speed, +40% Magazine Size, when you use an ability, restore 10% of your Max Ammo"
        },
        {
            name: "Weapon Jammer",
            cost: 10000,
            description: "+25 Armor, +10% Weapon Power, Dealing Weapon Damage steals 10% of target's bonus Attack Speed for 2s"
        },
        {
            name: "Amari's Antidote",
            cost: 11000,
            description: "+25 Health, +15% Weapon Power, while healing an ally below 50% Life with your Weapon, deal 15% increased Weapon Healing"
        },
        {
            name: "Booster Jets",
            cost: 11000,
            description: "+20% Attack Speed, when you use an ability, gain 20% Move Speed for 2s"
        },
        {
            name: "El-Sa'Ka Suppressor",
            cost: 11000,
            description: "+10% Weapon Power, Critical Hits apply 30% Healing Reduction for 2s"
        },
        {
            name: "Hardlight Accelerator",
            cost: 11000,
            description: "+10% Weapon Power, +10% Cooldown Reduction, when you use an ability, gain 5% Weapon Power for 3s, stacking up to 3 times"
        },
        {
            name: "The Closer",
            cost: 13000,
            description: "+20% Weapon Power, +10% Critical Damage, Critical Hits reveal the target for 3s"
        },
        {
            name: "Eye of the Spider",
            cost: 13500,
            description: "+25% Weapon Power, deal 10% increased damage to enemies under 30% Life"
        }
    ],
    ability: [
        {
            name: "Charged Plating",
            cost: 1000,
            description: "After you spend your Ultimate Charge, gain +25 Armor and +10% Ability Power for the rest of the round"
        },
        {
            name: "Power Playbook",
            cost: 1000,
            description: "+10% Ability Power"
        },
        {
            name: "Shady Spectacles",
            cost: 1000,
            description: "+10% Ability Lifesteal"
        },
        {
            name: "Winning Attitude",
            cost: 1500,
            description: "+25 Health, when you die, gain 15% Ultimate Charge"
        },
        {
            name: "Custom Stock",
            cost: 3750,
            description: "+5% Weapon Power, +10% Ability Power"
        },
        {
            name: "Biolight Overflow",
            cost: 4000,
            description: "+25 Health, +5% Ability Power, when you spend your Ultimate Charge, grant nearby allies 50 Overhealth for 3s"
        },
        {
            name: "Energized Bracers",
            cost: 4000,
            description: "+10% Ability Power, +10% Ability Lifesteal"
        },
        {
            name: "Junker Whatchamajig",
            cost: 4000,
            description: "+25% Starting Ult Charge"
        },
        {
            name: "Wrist Wraps",
            cost: 4000,
            description: "+5% Ability Power, +10% Attack Speed"
        },
        {
            name: "Multi-Tool",
            cost: 5000,
            description: "+5% Ability Power, +10% Cooldown Reduction"
        },
        {
            name: "Nano Cola",
            cost: 5500,
            description: "+20% Ability Power"
        },
        {
            name: "Three-Tap Tommygun",
            cost: 9500,
            description: "+10% Ability Power, +10% Attack Speed, after using an ability, your next 3 instances of Weapon Damage deal additional damage equal to 3% of the target's Life"
        },
        {
            name: "Biotech Maximizer",
            cost: 10000,
            description: "+25 Health, +10% Ability Power, when you use an ability that heals, reduce its cooldown by 5% for each unique ally it heals"
        },
        {
            name: "Catalytic Crystal",
            cost: 10000,
            description: "+15% Ability Power, ability Damage and Healing grants 20% more Ultimate Charge"
        },
        {
            name: "Lumerico Fusion Drive",
            cost: 10000,
            description: "+50 Armor, +15% Ability Power, when you use an ability, restore 50 Armor or Shields over 2s"
        },
        {
            name: "Superflexor",
            cost: 10000,
            description: "+25 Health, +10% Weapon Power, when you deal Weapon Damage or Healing, gain 5% Ability Power for 3s, stacking up to 5 times"
        },
        {
            name: "Cybervenom",
            cost: 10500,
            description: "+10% Ability Power, +5% Cooldown Reduction, Dealing Ability Damage applies 30% Healing Reduction for 2s"
        },
        {
            name: "Iridescent Iris",
            cost: 11000,
            description: "+20% Ability Power, +10% Cooldown Reduction, when you spend your Ultimate Charge, gain 100 Overhealth for 3s"
        },
        {
            name: "Liquid Nitrogen",
            cost: 11000,
            description: "+25 Health, +10% Ability Power, Dealing Ability Damage slows the target's Move Speed by 20% for 3s"
        },
        {
            name: "Mark of the Kitsune",
            cost: 11000,
            description: "+10% Ability Power, after casting an ability, your next instance of Weapon Damage or Healing deals 25 bonus damage or healing"
        },
        {
            name: "Champion's Kit",
            cost: 13500,
            description: "+40% Ability Power"
        }
    ],
    survival: [
        {
            name: "Adrenaline Shot",
            cost: 1000,
            description: "+10 Health, Health Packs grant 20% Move Speed for 3s and 50 Overhealth"
        },
        {
            name: "Electrolytes",
            cost: 1000,
            description: "At the start of the round, gain 100 unrecoverable Overhealth"
        },
        {
            name: "Field Rations",
            cost: 1000,
            description: "While on the Objective, restore 8 Life every 1s"
        },
        {
            name: "Running Shoes",
            cost: 1000,
            description: "+10 Health, at the start of the round and when you first respawn, gain 20% Move Speed for 10s while out of combat"
        },
        {
            name: "Armored Vest",
            cost: 1500,
            description: "+25 Armor"
        },
        {
            name: "First Aid Kit",
            cost: 1500,
            description: "+25 Shields, Reduce the time before your Life begins regenerating by 33%"
        },
        {
            name: "Heartbeat Sensor",
            cost: 1500,
            description: "+5% Movespeed, Enemies below 30% Life are revealed to you"
        },
        {
            name: "Siphon Gloves",
            cost: 1500,
            description: "+25 Health, [Quick Melee] damage heals for 25 Life"
        },
        {
            name: "Reinforced Titanium",
            cost: 3750,
            description: "+25 Shields, while you have Shields, take 10% reduced Ability Damage"
        },
        {
            name: "Cushioned Padding",
            cost: 4000,
            description: "+25 Shields, -40% Incoming Negative Effect Duration, when affected by Stun, Sleep, or Hinder, regenerate 10% of your Max Life over 3s"
        },
        {
            name: "Ironclad Exhaust Ports",
            cost: 4000,
            description: "+5% Cooldown Reduction, when you use an ability, gain 25 Overhealth for 3s"
        },
        {
            name: "Vishkar Condensor",
            cost: 4000,
            description: "+25 Shields, convert 100 Health into Shields"
        },
        {
            name: "Vital-e-tee",
            cost: 4000,
            description: "+10 Armor, Convert 100 Health into Armor"
        },
        {
            name: "Crusader Hydraulics",
            cost: 4500,
            description: "+25 Armor, while you have Armor, take 10% less Weapon Damage"
        },
        {
            name: "Iron Eyes",
            cost: 4500,
            description: "+25 Shields, you take 15% reduced damage from Critical Hits"
        },
        {
            name: "Meka Z-Series",
            cost: 5000,
            description: "+8% Health, Armor, and Shields"
        },
        {
            name: "Geneticist's Vial",
            cost: 9000,
            description: "+25 HP, the first time you die each round, revive at 200 Life after 3s"
        },
        {
            name: "Bloodbound",
            cost: 9500,
            description: "+50 Health, the last enemy to deal a final blow to you is Revealed when nearby, deal 10% more damage to them and take 10% reduced damage from them"
        },
        {
            name: "Divine Intervention",
            cost: 9500,
            description: "+50 Shield, when you take more than 100 damage at once, restore 15% of damage taken and start regenerating your Shields"
        },
        {
            name: "Gloomgauntlet",
            cost: 9500,
            description: "+50 Armor, +15% Melee Damage, [Melee] damage grants 10% Move Speed and restores 5% of max Life over 2s"
        },
        {
            name: "Martian Mender",
            cost: 10000,
            description: "+25 Health, +10% Cooldown Reduction, Restore 3% of your Life every 1s"
        },
        {
            name: "Phantasmic Flux",
            cost: 10000,
            description: "+10% Weapon Power, +10% Ability Power, +15% Weapon Lifesteal, +15% Ability Lifesteal, while at full Life, Lifesteal grants up to 100 Overhealth"
        },
        {
            name: "Rustung Von Wilhelm",
            cost: 10000,
            description: "+15% Health, Shields, and Armor, while below 30% Life, gain 10% Damage Reduction"
        },
        {
            name: "Vanadium Injection",
            cost: 10000,
            description: "+50 Shield, while at 100% Ultimate Charge, gain 50 Health, 10% Weapon Power, 10% Ability Power, 10% Weapon Speed, 10% Cooldown Reduction, and 10% Move Speed"
        },
        {
            name: "Nebula Conduit",
            cost: 11000,
            description: "+50 Health, +10% Weapon Power, prevent 15% of incoming damage and instead take that prevented damage over 3s"
        },
        {
            name: "Ogundimu Reduction Field",
            cost: 11000,
            description: "+50 Armor, when you take damage, gain 0.5% Damage Reduction for 1s, stacking up to 20 times"
        }
    ]
};