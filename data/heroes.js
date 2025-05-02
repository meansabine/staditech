
const heroes = {
    reaper: {
        name: "Reaper",
        role: "Damage",
        health: 250,
        armor: 0,
        shield: 0,
        abilities: [
            {
                name: "Hellfire Shotguns",
                description: "Reaper fires dual shotguns at short range, dealing massive damage to enemies at close quarters.",
                stats: [
                    { label: "Damage", value: "6 per pellet, 20 pellets per shot" },
                    { label: "Fire Rate", value: "1.5 shots per second" },
                    { label: "Ammo", value: "8" },
                    { label: "Reload Time", value: "1.5 seconds" }
                ]
            },
            {
                name: "Wraith Form",
                description: "Reaper becomes a shadow for a short period, making him invulnerable and increasing his speed.",
                stats: [
                    { label: "Duration", value: "3 seconds" },
                    { label: "Speed Boost", value: "+50%" },
                    { label: "Cooldown", value: "8 seconds" }
                ]
            },
            {
                name: "Shadow Step",
                description: "Reaper marks a destination and teleports to it.",
                stats: [
                    { label: "Range", value: "35 meters" },
                    { label: "Cooldown", value: "10 seconds" }
                ]
            },
            {
                name: "The Reaping (Passive)",
                description: "Reaper restores his health as he damages enemies.",
                stats: [
                    { label: "Life Steal", value: "35% of damage dealt" }
                ]
            },
            {
                name: "Death Blossom (Ultimate)",
                description: "Reaper spins in a circle while rapidly firing his shotguns, dealing massive damage to all nearby enemies.",
                stats: [
                    { label: "Damage", value: "170 per second" },
                    { label: "Duration", value: "3 seconds" },
                    { label: "Radius", value: "8 meters" },
                    { label: "Ultimate Cost", value: "2100 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Revolving Ruin",
                description: "Close-range Hellfire Shotgun hits grant 5% Attack Speed for 1s, stacking up to 8 times"
            },
            {
                name: "Shrouded Shrapnel",
                description: "Using Wraith Form increases the number of pellets per shot in your next magazine and its spread"
            },
            {
                name: "Death Step",
                description: "After using Shadow Step, cast Death Blossom for 1.5s with 50% reduced damage"
            },
            {
                name: "Strangle Step",
                description: "After using Shadow Step, double your Lifesteal for 3s"
            },
            {
                name: "Spirited To Slay",
                description: "Eliminations reset your cooldowns"
            },
            {
                name: "Backstabber",
                description: "After using an ability, your next shot deals additional damage over 3s to enemies struck from behind"
            },
            {
                name: "Wraith Renewal",
                description: "While in Wraith Form, restore your Life every 1s"
            },
            {
                name: "Ghosted",
                description: "While in Wraith Form, passing through enemies slows their Move Speed and Attack Speed"
            },
            {
                name: "Silent As The Grave",
                description: "Your footsteps and Shadow Step are significantly quieter"
            },
            {
                name: "Shared Siphon",
                description: "The Reaping also heals the nearest ally by a portion of Reaper's damage dealt"
            },
            {
                name: "Harvest Fest",
                description: "Hellfire Shotgun hits have a chance to spawn a Soul Globe. When picked up, restore Life, Ammo, and gain Move Speed for a short duration"
            },
            {
                name: "Vampiric Touch",
                description: "Hits with Quick Melee mark enemies for 5s. Allies gain Lifesteal against marked enemies"
            }
        ],
        items: {
            weapon: [
                {
                    name: "Neverfrost", cost: 10000,
                    description: "+25 Health, +5% Weapon Power, reduce effectiveness of enemy slows by 50%"
                },
                {
                    name: "Pocket Mist", cost: 4000,
                    description: "+25 Health, while below 50% Life, gain 20% Move Speed"
                },
                {
                    name: "Wretched Wings", cost: 10000,
                    description: "+25 Health, While in Wraith Form, gain the ability to fly and gain increased Move Speed"
                }
            ],
            ability: [
                {
                    name: "Dauntless Draught", cost: 10000,
                    description: "+50 Health, +15% Move Speed during Wraith Form, +33% Wraith Form Duration"
                },
                {
                    name: "Spectral Slugs", cost: 4000,
                    description: "+5% Attack Speed, +25% Magazine Size, using Shadow Step restores 100% of your ammo"
                },
                {
                    name: "Nightcreeper", cost: 9500,
                    description: "+10% Move Speed, +30% Shadow Step Cast Speed, using Wraith Form reduces the cooldown of Shadow Step by 2s"
                }
            ],
            survival: [
                {
                    name: "Devastation",
                    cost: 4000,
                    description: "Increased Ability Lifesteal, each Death Blossom elimination increases your Health by 25 until the end of the round, up to 100 Health"
                },
                {
                    name: "Crimson Cloak", cost: 11000,
                    description: "+25 Health, +10% Ability Power, gain 15% of max Health as Overhealth while using Death Blossom"
                },
                {
                    name: "Crowd Control", cost: 11000,
                    description: "+15% Ability Power, Death Blossom gains 5% Ability Power for each enemy within its range"
                },
                {
                    name: "Wreath Of Ruin",
                    cost: 4000,
                    description: "+20% Ability Power, +25% Death Blossom Radius, +20% Move Speed during Death Blossom"
                },
                {
                    name: "Onslaught", cost: 10000,
                    description: "+25% Max Ammo, every 3rd shot fires both of your Hellfire Shotguns. The extra shot does not consume ammo but deals 80% reduced damage"
                }
            ]
        }
    },
    dva: {
        name: "D.Va",
        role: "Tank",
        health: 300,
        armor: 300,
        shield: 0,
        abilities: [
            {
                name: "Fusion Cannons",
                description: "D.Va's mech is equipped with twin short-range rotating cannons that fire continuously without needing to reload.",
                stats: [
                    { label: "Damage", value: "2 per pellet, 11 pellets per shot" },
                    { label: "Fire Rate", value: "6.67 shots per second" },
                    { label: "Movement Speed", value: "-30% while firing" }
                ]
            },
            {
                name: "Light Gun",
                description: "While outside her mech, D.Va uses a small automatic pistol.",
                stats: [
                    { label: "Damage", value: "14 per shot" },
                    { label: "Fire Rate", value: "7 rounds per second" },
                    { label: "Ammo", value: "20" },
                    { label: "Reload Time", value: "1.4 seconds" }
                ]
            },
            {
                name: "Boosters",
                description: "D.Va's mech engages thrusters to fly in the direction she's facing.",
                stats: [
                    { label: "Damage", value: "10 on impact" },
                    { label: "Duration", value: "2 seconds" },
                    { label: "Speed Boost", value: "+125%" },
                    { label: "Cooldown", value: "4 seconds" }
                ]
            },
            {
                name: "Defense Matrix",
                description: "D.Va projects a forward-facing matrix that blocks enemy projectiles for a brief period.",
                stats: [
                    { label: "Duration", value: "2 seconds maximum" },
                    { label: "Recharge Rate", value: "12.5% per second" },
                    { label: "Range", value: "10 meters" },
                    { label: "Width", value: "4 meters" }
                ]
            },
            {
                name: "Micro Missiles",
                description: "D.Va launches a barrage of small rockets that deal damage in a small area on impact.",
                stats: [
                    { label: "Damage", value: "7 per missile, 18 missiles total" },
                    { label: "Duration", value: "1.5 seconds" },
                    { label: "Cooldown", value: "8 seconds" }
                ]
            },
            {
                name: "Self-Destruct (Ultimate)",
                description: "D.Va ejects and overloads her mech's fusion core, causing it to explode after a short delay.",
                stats: [
                    { label: "Damage", value: "1000 at center, scales down with distance" },
                    { label: "Radius", value: "20 meters" },
                    { label: "Detonation Time", value: "3 seconds" },
                    { label: "Ultimate Cost", value: "1848 points" }
                ]
            },
            {
                name: "Call Mech",
                description: "While outside her mech, D.Va can call down a new mech.",
                stats: [
                    { label: "Damage", value: "250 on impact" },
                    { label: "Ultimate Cost", value: "750 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Focused Fusion",
                description: "Fusion Cannon's spread is reduced by 66% and damage falloff range is 20m farther"
            },
            {
                name: "Legendary Loadout",
                description: "Micro Missiles are replaced with 6 Heavy Rockets, which deal 350% more explosive damage and have 100% increased radius"
            },
            {
                name: "Overstocked",
                description: "Gain 1 extra charge of Micro Missiles"
            },
            {
                name: "Countermeasures",
                description: "When you mitigate 150 damage with Defense Matrix, automatically fire 2 Micro Missiles"
            },
            {
                name: "Ignition Burst",
                description: "Boosters leave a trail of lava that deals 30 damage every 1s"
            },
            {
                name: "MEKA Punch",
                description: "While using Boosters, Quick Melee deals 75% more damage. Quick Melee eliminations reset the cooldown of Boosters"
            },
            {
                name: "Tokki Slam",
                description: "During Boosters, use crouch to slam the ground, dealing damage equal to 20% of your max Armor and knocking up enemies hit"
            },
            {
                name: "Facetanking",
                description: "Defense Matrix heals you for 30% of the damage it blocks"
            },
            {
                name: "Ultrawide Matrix",
                description: "Increase the size of Defense Matrix by 20% and its duration by 20%"
            },
            {
                name: "Stat Boost",
                description: "During the first 2s of Boosters, Defense Matrix recovers 100% faster"
            },
            {
                name: "Party Protector",
                description: "When you use Self-Destruct, allies within Self-Destruct radius gains 250 Overhealth for 8s"
            },
            {
                name: "Express Detonation",
                description: "Self-Destruct explosion is triggered 15% faster"
            }
        ],
        items: {
            weapon: [
                {
                    name: "Busan Blaster",
                    cost: 10000,
                    description: "+20% Ability Power, Light Gun gains a secondary fire, which charges up to fire a piercing shot that deals 80 piercing damage"
                },
                {
                    name: "Nano Cola™ Nitrous",
                    cost: 11000,
                    description: "+25 Health, when you eject from your Mech, gain 5% increased max Health and gain Nano Boost for 4s"
                },
                {
                    name: "Chip-Damage Diverter",
                    cost: 10000,
                    description: "+50 Health, when you deal damage to Barriers while in your Mech, gain Shields equal to 10% of the damage dealt, up to 200. Resets when your Mech is destroyed"
                }
            ],
            ability: [
                {
                    name: "Multi-Task Mod",
                    cost: 10000,
                    description: "+10% Weapon Power, Fusion Cannons can now be fired while using Defense Matrix"
                },
                {
                    name: "Solo Spec",
                    cost: 4000,
                    description: "+25 Health, when you mitigate damage with Defense Matrix, gain Shields equal to 10% of the damage mitigated, up to 100. Resets when your Mech is destroyed"
                },
                {
                    name: "Plot Armor",
                    cost: 4000,
                    description: "+25 Armor, while Defense Matrix is active, gain 30% damage reduction against beams"
                }
            ],
            survival: [
                {
                    name: "Singijeon's Pulse Plating",
                    cost: 10000,
                    description: "+50 Health, gain 5% of damage mitigated by Defense Matrix as Ultimate Charge"
                },
                {
                    name: "Galvanized Core",
                    cost: 4000,
                    description: "+25 Health, 25% Boosters Duration"
                },
                {
                    name: "APM AMP",
                    cost: 9000,
                    description: "+50 Shield, when you use Boosters, allies within 16m gain 25% Move Speed for 2s"
                },
                {
                    name: "Mastermind's Mitigator",
                    cost: 10000,
                    description: "Every 300 damage you mitigate with Defense Matrix reduces Micro Missiles cooldown by 1s"
                },
                {
                    name: "Onslaught Ordinance",
                    cost: 4500,
                    description: "+15% Ability Power, the quantity and duration of Micro Missiles is increased by 20%"
                },
                {
                    name: "Macro Missiles",
                    cost: 12000,
                    description: "Micro Missiles deal 25% increased damage and have significantly increased knockback"
                },
                {
                    name: "Dae-hyun's Detonator",
                    cost: 4000,
                    description: "+15% Ability Lifesteal, if your Mech detonates while mid-air, increase Self-Destruct explosion damage and range by 200%"
                },
                {
                    name: "Vesuvius Protocol",
                    cost: 4000,
                    description: "+10% Ability Power, using Self-Destruct drops lava nearby that deals 30 damage every 1s"
                }
            ]
        }
    },
    moira: {
        name: "Moira",
        role: "Support",
        health: 200,
        armor: 0,
        shield: 0,
        abilities: [
            {
                name: "Biotic Grasp",
                description: "Moira's primary fire heals allies in front of her, consuming biotic energy. Her secondary fire damages enemies and restores biotic energy.",
                stats: [
                    { label: "Primary Fire Healing", value: "70 per second" },
                    { label: "Primary Fire Range", value: "15 meters" },
                    { label: "Secondary Fire Damage", value: "50 per second" },
                    { label: "Secondary Fire Range", value: "20 meters" },
                    { label: "Secondary Fire Self-Healing", value: "24 per second" }
                ]
            },
            {
                name: "Biotic Orb",
                description: "Moira launches a rebounding orb that either heals allies or damages enemies.",
                stats: [
                    { label: "Healing Orb", value: "65 per second, 300 total" },
                    { label: "Damage Orb", value: "50 per second, 200 total" },
                    { label: "Duration", value: "7 seconds" },
                    { label: "Cooldown", value: "8 seconds" }
                ]
            },
            {
                name: "Fade",
                description: "Moira becomes invulnerable and gains increased speed for a brief period.",
                stats: [
                    { label: "Duration", value: "0.8 seconds" },
                    { label: "Speed Boost", value: "+250%" },
                    { label: "Cooldown", value: "6 seconds" }
                ]
            },
            {
                name: "Coalescence (Ultimate)",
                description: "Moira channels a long-range beam that heals allies and damages enemies.",
                stats: [
                    { label: "Healing", value: "140 per second" },
                    { label: "Damage", value: "70 per second" },
                    { label: "Self-Healing", value: "50 per second" },
                    { label: "Duration", value: "8 seconds" },
                    { label: "Movement Speed", value: "+40%" },
                    { label: "Ultimate Cost", value: "2380 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Optimal Overflow",
                description: "After you spend 50 Biotic Energy, launch the last selected Biotic Orb with 75% reduced duration"
            },
            {
                name: "Precarious Potency",
                description: "Allies healed by your Biotic Grasp are healed for an additional 20% of Biotic Grasp's healing over 5s"
            },
            {
                name: "Deconstruction",
                description: "After you spend 50 Biotic Energy, deal 20% increased damage for 6s"
            },
            {
                name: "Ethereal Excision",
                description: "While aiming at an enemy's head with Biotic Grasp's secondary fire, gain 30% Lifesteal, 30% Move Speed, and restore 100% increased Biotic Energy"
            },
            {
                name: "Chain Grasp",
                description: "After using Biotic Orb, Biotic Grasp's secondary fire chains to 2 additional targets within 20m for 3s"
            },
            {
                name: "Empowering You",
                description: "Biotic Grasp's secondary fire can target allies, increasing their damage by 15%"
            },
            {
                name: "Cross-Orbal",
                description: "Biotic Orb launches an additional Biotic Orb of the other type with 50% reduced capacity"
            },
            {
                name: "Multiball",
                description: "Biotic Orb launches 2 additional orbs of the chosen type with 85% reduced effectiveness"
            },
            {
                name: "Phantasm",
                description: "When you use Fade, spawn a stationary copy of the last selected Biotic Orb with 50% reduced duration"
            },
            {
                name: "Scientific Deathod",
                description: "While using Fade, passing through enemies grants 5% Ultimate Charge and permanent Overhealth equal to 15% of your max Life"
            },
            {
                name: "Voidhoppers",
                description: "Fade phases other allies within 8m for 0.25s and grants them Overhealth equal to 20% of your max Life"
            },
            {
                name: "Destruction's Divide",
                description: "+25% Coalescence Duration, Coalescence can be toggled between pure healing or pure damage, with 25% greater effect"
            }
        ],
        items: {
            weapon: [
                {
                    name: "High Capacity Tubing", cost: 4000,
                    description: "+10% Weapon Power, Moira can store an additional 50 Biotic Energy, beyond her base maximum of 100"
                },
                {
                    name: "Bio-Needles", cost: 4000,
                    description: "+10% Attack Speed, Biotic Grasp's secondary fire restores 50% more Biotic Energy"
                },
                {
                    name: "Subatomic Splitter", cost: 10000,
                    description: "+10% Weapon Power, +15% Biotic Grasp Secondary Fire Range"
                }
            ],
            ability: [
                {
                    name: "Smart Orbs", cost: 4000,
                    description: "+5% Ability Power, Biotic Orb moves 50% slower while it is healing or dealing damage"
                },
                {
                    name: "Extendrils", cost: 11000,
                    description: "+10% Ability Power, +30% Biotic Orb Tendril Range"
                },
                {
                    name: "Abyss Boots", cost: 4000,
                    description: "+25 Health, while using Fade, you jump 30% higher"
                }
            ],
            survival: [
                {
                    name: "Alternative Energy", cost: 10000,
                    description: "+10% Ability Power, +15% Attack Speed, when you use Fade, refill your Biotic Energy"
                },
                {
                    name: "Levitation Shawl", cost: 4000,
                    description: "+10% Ability Power, coalescence grants free flight while active"
                },
                {
                    name: "Coalegion", cost: 10000,
                    description: "+25 Health, +15% Ability Power, allies healed by Coalescence deal 15% increased damage"
                }
            ]
        }
    },
    reinhardt: {
        name: "Reinhardt",
        role: "Tank",
        health: 500,
        armor: 125,
        shield: 1600,
        abilities: [
            {
                name: "Rocket Hammer",
                description: "Reinhardt's Rocket Hammer is a massive melee weapon with a wide arc that can strike multiple enemies at once.",
                stats: [
                    { label: "Damage", value: "85 per swing" },
                    { label: "Rate of Fire", value: "1 swing per 0.9 seconds" },
                    { label: "Range", value: "5 meters" }
                ]
            },
            {
                name: "Barrier Field",
                description: "Reinhardt deploys a broad, rectangular energy barrier in front of him that blocks enemy attacks.",
                stats: [
                    { label: "Shield Health", value: "1600" },
                    { label: "Regen Rate", value: "144 per second" },
                    { label: "Regen Delay", value: "2 seconds after shield down" }
                ]
            },
            {
                name: "Charge",
                description: "Reinhardt charges forward in a straight line, pinning the first enemy he hits against a wall for massive damage.",
                stats: [
                    { label: "Pin Damage", value: "300" },
                    { label: "Knockback Damage", value: "50" },
                    { label: "Speed", value: "16.7 meters per second" },
                    { label: "Range", value: "Up to 55 meters" },
                    { label: "Cooldown", value: "10 seconds" }
                ]
            },
            {
                name: "Fire Strike",
                description: "Reinhardt launches a flaming projectile that pierces through enemies and barriers, damaging all enemies it passes through.",
                stats: [
                    { label: "Damage", value: "100" },
                    { label: "Speed", value: "25 meters per second" },
                    { label: "Cooldown", value: "6 seconds" }
                ]
            },
            {
                name: "Earthshatter (Ultimate)",
                description: "Reinhardt slams his hammer into the ground, knocking down all enemies in front of him.",
                stats: [
                    { label: "Damage", value: "50" },
                    { label: "Stun Duration", value: "2.5 seconds" },
                    { label: "Range", value: "20 meters forward, 6 meters wide" },
                    { label: "Ultimate Cost", value: "1650 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Smashing!",
                description: "When you deal damage with Rocket Hammer, gain 3% Move Speed and 5% Weapon Lifesteal for 3s, stacking up to 5 times."
            },
            {
                name: "Feeling The Burn",
                description: "Every 3rd Rocket Hammer swing burns the target, dealing 30% extra damage over 2s."
            },
            {
                name: "Wilhelmwagen",
                description: "While Barrier Field is deployed, you heal for 5% of the damage it mitigates and gain 30% Move Speed."
            },
            {
                name: "To Me, My Friends!",
                description: "While Barrier Field is deployed, allies within 5m are healed equal to 3% of your max Life every 1s."
            },
            {
                name: "Amplification Barrier",
                description: "Friendly projectiles that pass through your Barrier Field deal 15% more damage."
            },
            {
                name: "Barrier Reconstruction",
                description: "When you deal damage with Rocket Hammer or Fire Strike, restore health to Barrier Field equal to 10% of its max Health."
            },
            {
                name: "Vanguard",
                description: "Charge grants nearby allies Overhealth equal to 10% of your max Life and 20% Move Speed for 3s."
            },
            {
                name: "Shield Stampede",
                description: "+50% Charge Knockback Power During Charge, automatically deploy Barrier Field."
            },
            {
                name: "Vroom Boom Boom",
                description: "During Charge, colliding with a wall triggers an explosion that deals 30% of Charge's pin damage."
            },
            {
                name: "Impact Burst",
                description: "Fire Strike triggers an explosion the first time it hits an enemy, dealing 20% of its damage in a 3m radius."
            },
            {
                name: "Magma Strike",
                description: "If Fire Strike is cast twice within 2s, the second strike leaves a trail of lava that Burns enemies."
            },
            {
                name: "Blazing Blitz",
                description: "After using Earthshatter, every Rocket Hammer swing launches a Fire Strike for 4s."
            }
        ],
        items: {
            weapon: [
                {
                    name: "Ironclad Cleats", cost: 3750,
                    description: "+25 Armor, +5% Weapon Power, +40% Knockback Resist"
                },
                {
                    name: "Rocket Boots", cost: 4000,
                    description: "+25 Health, holding crouch increases the height of your next jump by up to 200%"
                },
                {
                    name: "Dampener Grip", cost: 10000,
                    description: "+10% Ability Power, +10% Attack Speed, when you deal damage with Rocket Hammer, reduce the cooldown of your abilities by 1s"
                }
            ],
            ability: [
                {
                    name: "Plan Z", cost: 11000,
                    description: "+10% Weapon Power, Gain 5% Attack Speed for every 100 missing Life, up to 25%"
                },
                {
                    name: "Boost Recycler", cost: 4000,
                    description: "+10% Ability Power, if Charge is interrupted by stun, sleep, or hinder, refund 50% of Charge's cooldown"
                },
                {
                    name: "Crusader's Cure",
                    cost: 3750,
                    description: "+25 Health, using Charge cleanses all negative effects"
                }
            ],
            survival: [
                {
                    name: "Gryphon Glider", cost: 10000,
                    description: "+25 Health, +10% Ability Lifesteal, you can now fly during Charge"
                },
                {
                    name: "Overclocked Barrier",
                    cost: 4000,
                    description: "+25 Health, +20% Barrier Field Health, +20% Barrier Field Size"
                },
                {
                    name: "Infusion Generator", cost: 10000,
                    description: "+25 Health, Increase Barrier Field Health by 100% of your max Life"
                },
                {
                    name: "Phoenix Protocol", cost: 10000,
                    description: "+50 Health, Barrier Field regenerates 50% faster and begins regenerating 50% sooner after being destroyed"
                },
                {
                    name: "Chimera's Maw",
                    cost: 4000,
                    description: "+10% Ability Power, +35% Fire Strike Radius"
                },
                {
                    name: "Rocket Strike", cost: 10000,
                    description: "+20% Ability Power, +50% Fire Strike Projectile Speed"
                }
            ]
        }
    },
    soldier76: {
        name: "Soldier: 76",
        role: "Damage",
        health: 200,
        armor: 0,
        shield: 0,
        abilities: [
            {
                name: "Heavy Pulse Rifle",
                description: "Soldier: 76's primary weapon is an automatic rifle with good accuracy and medium range.",
                stats: [
                    { label: "Damage", value: "20 per shot" },
                    { label: "Fire Rate", value: "9 rounds per second" },
                    { label: "Ammo", value: "30" },
                    { label: "Reload Time", value: "1.5 seconds" }
                ]
            },
            {
                name: "Helix Rockets",
                description: "Soldier: 76 fires a burst of rockets that spiral outward and explode on impact, dealing significant damage.",
                stats: [
                    { label: "Damage", value: "120 direct hit, 80 splash" },
                    { label: "Splash Radius", value: "3 meters" },
                    { label: "Cooldown", value: "6 seconds" }
                ]
            },
            {
                name: "Sprint",
                description: "Soldier: 76 can run faster for as long as the ability is active.",
                stats: [
                    { label: "Speed Boost", value: "+50%" },
                    { label: "Duration", value: "Unlimited (toggle)" }
                ]
            },
            {
                name: "Biotic Field",
                description: "Soldier: 76 deploys a biotic emitter that heals himself and allies within its area of effect.",
                stats: [
                    { label: "Healing", value: "40 health per second" },
                    { label: "Duration", value: "5 seconds" },
                    { label: "Radius", value: "4.5 meters" },
                    { label: "Cooldown", value: "15 seconds" }
                ]
            },
            {
                name: "Tactical Visor (Ultimate)",
                description: "Soldier: 76's tactical visor automatically aims his weapon at targets in view, allowing for perfect tracking.",
                stats: [
                    { label: "Duration", value: "6 seconds" },
                    { label: "Ultimate Cost", value: "2310 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Rocket Visor",
                description: "After using Helix Rocket, activate Tactical Visor briefly"
            },
            {
                name: "Chaingun",
                description: "While continuously shooting Pulse Rifle, each shot grants 0.5% Weapon Power, stacking up to 100 times"
            },
            {
                name: "Biotic Bullseye",
                description: "While in Biotic Field, critical hits restore 10% Max Ammo and extend the field's duration by 0.5s (up to 5s)"
            },
            {
                name: "Back Off",
                description: "Enemies within your Biotic Field take damage equal to 100% of its healing output"
            },
            {
                name: "On Me!",
                description: "Biotic Field moves with you and grants you 20% increased max Health while active"
            },
            {
                name: "Frontliners",
                description: "Allies in range of your Biotic Field when it spawns gain Overhealth equal to 40% of your max Life for 3s"
            },
            {
                name: "Hunker Down",
                description: "Helix Rocket damage creates a Biotic Field with shorter duration at your position"
            },
            {
                name: "Cratered",
                description: "Increase Helix Rocket explosion radius and explosion damage"
            },
            {
                name: "Double Helix",
                description: "Helix Rocket fires a second homing Helix Rocket that deals 70% reduced damage"
            },
            {
                name: "Man On The Run",
                description: "During Sprint, restore 10% of your Ammo every 1s and increase your Max Ammo by 10% until you reload, stacking up to 10 times"
            },
            {
                name: "Track and Field",
                description: "During Sprint, Biotic Field cooldown refreshes 150% faster"
            },
            {
                name: "Peripheral Pulse",
                description: "During Tactical Visor, Pulse Rifle shoots at 1 additional enemy, dealing 50% damage"
            }
        ],
        items: {
            weapon: [
                {
                    name: "Battery Pack",
                    cost: 4000,
                    description: "+10% Ability Power, +30% Biotic Field Duration"
                },
                {
                    name: "Rapid Response Radius",
                    cost: 10000,
                    description: "+10% Ability Power, +30% Biotic Field Radius, Biotic Field heals allies below 50% Life for 20% more"
                },
                {
                    name: "Bomb Diffusal Boots",
                    cost: 4000,
                    description: "+25 Health, +5% Weapon Power, Helix Rocket self-knockback is increased by 200% and no longer damages yourself"
                }
            ],
            ability: [
                {
                    name: "Pulse Converter",
                    cost: 4000,
                    description: "+5% Attack Speed, +5% Cooldown Reduction, Helix Rocket damage restores 20% of your ammo"
                },
                {
                    name: "Compression Fatigues",
                    cost: 4000,
                    description: "+25 Health, +5% Attack Speed, +25% Sprint Move Speed"
                },
                {
                    name: "Iron Lung",
                    cost: 4000,
                    description: "+25 Health, while using Sprint, gain Overhealth equal to 5% of your max Life every 1s, up to 25%, for 5s"
                }
            ],
            survival: [
                {
                    name: "Endgame Equalizer",
                    cost: 10000,
                    description: "+25 Health, +15% Ability Power, when you spend your Ultimate Charge, reset all ability cooldowns. While Tactical Visor is active, gain 20% Cooldown Reduction"
                }
            ]
        }
    },
    kiriko: {
        name: "Kiriko",
        role: "Support",
        health: 200,
        armor: 0,
        shield: 0,
        abilities: [
            {
                name: "Healing Ofuda",
                description: "Kiriko throws healing talismans that seek out and heal allies.",
                stats: [
                    { label: "Healing", value: "30 per ofuda" },
                    { label: "Rate of Fire", value: "5 per second" },
                    { label: "Ammo", value: "10" },
                    { label: "Reload Time", value: "1.5 seconds" }
                ]
            },
            {
                name: "Kunai",
                description: "Kiriko throws kunai that deal increased damage on headshots.",
                stats: [
                    { label: "Damage", value: "40 body, 120 headshot" },
                    { label: "Fire Rate", value: "2.5 per second" },
                    { label: "Projectile Speed", value: "50 meters per second" }
                ]
            },
            {
                name: "Swift Step",
                description: "Kiriko teleports to an ally, phasing out of existence during the teleport and cleansing debuffs.",
                stats: [
                    { label: "Range", value: "35 meters" },
                    { label: "Cooldown", value: "7 seconds" }
                ]
            },
            {
                name: "Protection Suzu",
                description: "Kiriko throws a protection charm that makes allies briefly invulnerable and cleanses negative effects.",
                stats: [
                    { label: "Invulnerability Duration", value: "0.75 seconds" },
                    { label: "Healing", value: "50" },
                    { label: "Area of Effect", value: "3 meters" },
                    { label: "Cooldown", value: "14 seconds" }
                ]
            },
            {
                name: "Kitsune Rush (Ultimate)",
                description: "Kiriko summons a fox spirit that rushes forward, creating a path that increases ally movement speed, attack speed, and cooldown reduction.",
                stats: [
                    { label: "Duration", value: "8 seconds" },
                    { label: "Movement Speed Bonus", value: "+50%" },
                    { label: "Attack Speed Bonus", value: "+25%" },
                    { label: "Cooldown Reduction", value: "50%" },
                    { label: "Ultimate Cost", value: "1980 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Foxy Fireworks",
                description: "After reloading, your next 3 Kunai explode on contact, dealing 20 damage to nearby enemies"
            },
            {
                name: "Keen Kunai",
                description: "Kunai critical hits decreases active ability cooldowns by 25% and refund 3 ammo"
            },
            {
                name: "Triple Threat",
                description: "After using Swift Step, for 4s, your secondary fire throws 2 additional Kunai in a spread that deal 50% less damage"
            },
            {
                name: "Leaf On The Wind",
                description: "Healing Ofuda bounces to another ally up to 2 times, healing for 30% of the normal amount"
            },
            {
                name: "Self-Care",
                description: "When you use Healing Ofuda, heal yourself for 5% of your max Life"
            },
            {
                name: "Supported Shooting",
                description: "When Healing Ofuda heals allies, grant them 25% increased Attack Speed for 3s"
            },
            {
                name: "Fleet Foot",
                description: "Swift Step can be used directionally without a target"
            },
            {
                name: "Clone Conjuration",
                description: "After using Swift Step, create a clone of yourself that lasts for 5s"
            },
            {
                name: "Two-Zu",
                description: "Protection Suzu gains an additional charge"
            },
            {
                name: "Cleansing Charge",
                description: "When you cleanse negative effects with Protection Suzu, gain 5% Ultimate Charge for each hero cleansed"
            },
            {
                name: "Crossing Guard",
                description: "Kitsune Rush now also reduces enemies Move Speed by 50% for 2s"
            },
            {
                name: "Spirit Veil",
                description: "Kitsune Rush cast makes Kiriko invulnerable for 4s and cleansed of negative effects"
            }
        ],
        items: {
            weapon: [
                {
                    name: "Kitsune Kicks", cost: 4000,
                    description: "+10% Move Speed, gain the ability to Double Jump"
                },
                {
                    name: "Cyclist Gloves", cost: 5000,
                    description: "When you use an ability gain 20% Attack Speed for 3s"
                },
                {
                    name: "Asa's Armaments",
                    cost: 4000,
                    description: "+10% Attack Speed, Kunai bounce off surfaces 1 time"
                }
            ],
            ability: [
                {
                    name: "Ryōta's Reloader",
                    cost: 5000,
                    description: "+35% Reload Speed, after casting an ability, restore 100% of your ammo"
                },
                {
                    name: "Teamwork Toolkit", cost: 5000,
                    description: "+10% Weapon Power, when you heal an ally, grant them 10% increased Move Speed for 3s"
                },
                {
                    name: "Farsight Focus Sash", cost: 5000,
                    description: "+10% Weapon Power, when you deal damage, gain 200% Healing Ofuda Projectile Speed for 5s"
                }
            ],
            survival: [
                {
                    name: "Spirits' Guidance",
                    cost: 10000,
                    description: "+15% Weapon Power, 100% Healing Ofuda Projectile Speed"
                },
                {
                    name: "Donut Delivery", cost: 10000,
                    description: "+20% Ability Power, Swift Step heals nearby allies by 80 Life over 2s"
                },
                {
                    name: "Goddess's Aura",
                    cost: 10000,
                    description: "+25 Health, after using Swift Step, you gain 100 Overhealth for 4s"
                },
                {
                    name: "Talisman of Velocity", cost: 10000,
                    description: "+15% Ability Power, Protection Suzu grants 25% Attack Speed and 25% Move Speed for 4s"
                },
                {
                    name: "Talisman of Life", cost: 11000,
                    description: "+20% Ability Power, Protection Suzu grants 100 Overhealth for 5s"
                },
                {
                    name: "Eye Of The Yokai",
                    cost: 3000,
                    description: "+10% Ability Power, 35% Kitsune Rush Duration"
                },
                {
                    name: "Our Bikes", cost: 10000,
                    description: "+25 Health, +15% Ability Power, allies affected by Kitsune Rush are healed for 80 every 1s"
                }
            ]
        }
    },
    genji: {
        name: "Genji",
        role: "Damage",
        health: 200,
        armor: 0,
        shield: 0,
        abilities: [
            {
                name: "Shuriken",
                description: "Genji throws three deadly shuriken in quick succession. He can throw either a single, precise volley or fan them out to cover more ground.",
                stats: [
                    { label: "Primary Fire Damage", value: "28 per shuriken" },
                    { label: "Secondary Fire Damage", value: "28 per shuriken" },
                    { label: "Fire Rate", value: "3 volleys per second" },
                    { label: "Ammo", value: "30" },
                    { label: "Reload Time", value: "1.5 seconds" }
                ]
            },
            {
                name: "Swift Strike",
                description: "Genji darts forward, slashing with his katana and passing through foes in his path.",
                stats: [
                    { label: "Damage", value: "50" },
                    { label: "Range", value: "15 meters" },
                    { label: "Cooldown", value: "8 seconds" }
                ]
            },
            {
                name: "Deflect",
                description: "Genji reflects incoming projectiles towards the direction he's aiming.",
                stats: [
                    { label: "Duration", value: "2 seconds" },
                    { label: "Cooldown", value: "8 seconds" }
                ]
            },
            {
                name: "Cyber-Agility (Passive)",
                description: "Genji can climb walls and perform double jumps.",
                stats: [
                    { label: "Wall Climb Height", value: "Up to 10 meters" }
                ]
            },
            {
                name: "Dragonblade (Ultimate)",
                description: "Genji brandishes his katana for a brief period, drastically increasing his attack power and lethality.",
                stats: [
                    { label: "Damage", value: "120 per swing" },
                    { label: "Swing Rate", value: "1 per 0.9 seconds" },
                    { label: "Duration", value: "6 seconds" },
                    { label: "Ultimate Cost", value: "1800 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Wyrm's Maw",
                description: "Targets hit by your Shurikens take 10% more damage from Swift Strike for 4s, stacking up to 5 times"
            },
            {
                name: "Laceration",
                description: "Swift Strike deals 25% additional damage over 3s to enemies hit"
            },
            {
                name: "Iaido Strike",
                description: "After Deflect ends, you quickly swing your Dragonblade once"
            },
            {
                name: "Hidden Blade",
                description: "Gain 50% Melee Lifesteal and +25 Quick Melee Damage"
            },
            {
                name: "Forged Under Fire",
                description: "While Deflect is active, heal for 60% of the damage it prevents"
            },
            {
                name: "Deflect-o-Bot",
                description: "+50% Deflected Projectile Speed, During the first 1.5s of Deflect, automatically deflect projectiles towards enemies"
            },
            {
                name: "Sacred Shuriken",
                description: "Shuriken's primary fire throws 2 additional Shuriken that don't consume any extra ammo"
            },
            {
                name: "Hanamura Healing",
                description: "Critical hits and Swift Strike grant Overhealth equal to 25% of their damage dealt for 5s"
            },
            {
                name: "Spirit of Sojiro",
                description: "When Deflect stops incoming damage, reduce the cooldown of Swift Strike by 1s, up to 5s"
            },
            {
                name: "Dragon's Breath",
                description: "Dragonblade swings also fire a large piercing projectile that deals 50% of Dragonblade's damage"
            },
            {
                name: "Cybernetic Speed",
                description: "Dealing damage with Shuriken grants 2% Shuriken Attack Speed for 3s, stacking up to 15 times"
            },
            {
                name: "Hashimoto's Bane",
                description: "After using an ability, your next secondary fire throws 2 extra Shuriken that seek enemies but deal 50% less damage"
            }
        ],
        items: {
            weapon: [
                {
                    name: "Spiked Grip", cost: 3750,
                    description: "+30% Max Ammo, while climbing restore 20% of your ammo every 1s"
                },
                {
                    name: "Swift-Loader", cost: 10000,
                    description: "+10% Attack Speed, +30% Max Ammo, damaging an enemy with Swift Strike restores 20% of your ammo"
                },
                {
                    name: "Enduring Edge", cost: 10000,
                    description: "+10% Weapon Power, 4s Dragonblade Duration"
                }
            ],
            ability: [
                {
                    name: "Ambusher Optics", cost: 10000,
                    description: "+25% Quick Melee damage, Quick Melee can critically hit when hitting enemies from behind, dealing 50% increased damage"
                },
                {
                    name: "Traversal Kinetics", cost: 3750,
                    description: "Swift Strike cooldown is reduced by 50% if it deals no damage"
                },
                {
                    name: "Ninja Soles", cost: 4000,
                    description: "+5% Cooldown Reduction, +15% Move Speed during Deflect"
                }
            ],
            survival: [
                {
                    name: "Clean Sweep", cost: 10000,
                    description: "+10% Ability Power, +15% Ability Lifesteal, +50% Swift Strike Width"
                },
                {
                    name: "Deflecting Dash", cost: 10000,
                    description: "+15% Ability Power, during Swift Strike, deflect incoming projectiles toward your reticle"
                },
                {
                    name: "Equilibrium Gear", cost: 4000,
                    description: "+25 Health, while climbing, heal 5% of your Life every 1s"
                },
                {
                    name: "Anti-Beam Coating", cost: 4000,
                    description: "+25 Armor, +5% Attack Speed, Deflect blocks Beam attacks"
                },
                {
                    name: "Sparrowhawk Feather", cost: 4000,
                    description: "+25 Health, Gain an additional jump"
                },
                {
                    name: "Transference Delta", cost: 10000,
                    description: "15% Ultimate Cost Reduction, convert 100 Health to Armor, when you use Dragonblade, heal your Armor fully"
                },
                {
                    name: "Slicy Coolant", cost: 10000,
                    description: "+50 Armor, +5% Cooldown Reduction, +1s Deflect Duration"
                }
            ]
        }
    },
    mei: {
        name: "Mei",
        role: "Damage",
        health: 250,
        armor: 0,
        shield: 0,
        abilities: [
            {
                name: "Endothermic Blaster",
                description: "Mei's primary fire shoots a short-range freeze ray that slows and eventually freezes enemies. Her secondary fire launches an icicle projectile.",
                stats: [
                    { label: "Primary Fire Damage", value: "55 per second" },
                    { label: "Freeze Duration", value: "1.5 seconds" },
                    { label: "Secondary Fire Damage", value: "75" },
                    { label: "Secondary Fire Rate", value: "1 per 0.8 seconds" },
                    { label: "Ammo", value: "200" },
                    { label: "Reload Time", value: "1.5 seconds" }
                ]
            },
            {
                name: "Cryo-Freeze",
                description: "Mei encases herself in a block of ice, healing herself and becoming invulnerable to damage.",
                stats: [
                    { label: "Healing", value: "150 over duration" },
                    { label: "Duration", value: "4 seconds" },
                    { label: "Cooldown", value: "12 seconds" }
                ]
            },
            {
                name: "Ice Wall",
                description: "Mei creates a massive ice wall that can be used to block damage, obstruct enemy movement, or help allies reach high places.",
                stats: [
                    { label: "Health", value: "400 per pillar" },
                    { label: "Duration", value: "5 seconds" },
                    { label: "Cooldown", value: "13 seconds" }
                ]
            },
            {
                name: "Blizzard (Ultimate)",
                description: "Mei deploys a weather-modification drone that freezes enemies in a wide radius.",
                stats: [
                    { label: "Damage", value: "100 over duration" },
                    { label: "Radius", value: "10 meters" },
                    { label: "Duration", value: "5 seconds" },
                    { label: "Ultimate Cost", value: "1680 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Permafrost",
                description: "Increase your Max Health by 50% of your Ability Power"
            },
            {
                name: "Slowball",
                description: "Endothermic Blaster's secondary fire now shoots a snowball that applies 30% slow for 1s on critical hit"
            },
            {
                name: "Extendothermics",
                description: "Endothermic Blaster's primary fire range is increased by 6m"
            },
            {
                name: "Frost Armor",
                description: "Gain Armor equal to 5% of the primary fire damage you deal, up to 100, until the end of the round"
            },
            {
                name: "Snowball Flight",
                description: "Jumping while mid-air creates a large Ice Wall pillar under you. (12s Cooldown)"
            },
            {
                name: "Twice As Ice",
                description: "When you use Cryo-Freeze, reset the next cooldown of Ice Wall"
            },
            {
                name: "Iceberg",
                description: "Ice Wall spawns a mini Blizzard that slows enemies"
            },
            {
                name: "Cryclone",
                description: "Cryo-Freeze spawns a mini Blizzard that slows enemies"
            },
            {
                name: "Coulder",
                description: "Cryo-Freeze now encases you in a rolling iceball that can knock back enemies and deal 20 damage"
            },
            {
                name: "Frost Nova",
                description: "When Cryo-Freeze ends, knock back nearby enemies, dealing 60 damage"
            },
            {
                name: "Blizznado",
                description: "While within Blizzard, heal 5% of your Life every 1s"
            },
            {
                name: "Avalanche",
                description: "Visible enemies within 20m of the Blizzard are slowed by 25%"
            },
            {
                name: "Winter's Protection",
                description: "Allies within Blizzard gains 10 temporary Overhealth per second"
            }
        ],
        items: {
            weapon: [
                {
                    name: "Snowboot", cost: 10000,
                    description: "+15% Attack Speed, Frozen ground increases Mei's Movement Speed by 35%"
                },
                {
                    name: "Coldspot", cost: 4000,
                    description: "+25 Health, Primary Fire and Blizzard can remove burn"
                },
                {
                    name: "Focused Flurries", cost: 10000,
                    description: "+15% Attack Speed, Max Ammo is increased by 75% but reloading takes 50% longer"
                }
            ],
            ability: [
                {
                    name: "Sturdy Snowfort", cost: 10000,
                    description: "+15% Ability Power, Ability Power is increased by 5% per each spawned Ice Pillars"
                },
                {
                    name: "Ice Sheet", cost: 10000,
                    description: "+50 Health, Ice Wall Duration is increased by 3 seconds and health is increased by 100%"
                },
                {
                    name: "Meicicle", cost: 4000,
                    description: "+25 Health, Cryo-Freeze duration is increased by 25%"
                }
            ],
            survival: [
                {
                    name: "Ecopoint Cryobed", cost: 10000,
                    description: "+20% Ability Power, on near Death, go into Cryo-Freeze and gain 15% Ultimate Charge. Can happen once every round"
                },
                {
                    name: "Icy Veins", cost: 10000,
                    description: "+10% Ability Power, Blizzard deals 100% increased damage"
                },
                {
                    name: "Himalayan Hat", cost: 10000,
                    description: "+10% Attack Speed, while within Blizzard, gain 10% Attack Speed"
                }
            ]
        }
    },
    zarya: {
        name: "Zarya",
        role: "Tank",
        health: 250,
        armor: 0,
        shield: 225,
        abilities: [
            {
                name: "Particle Cannon",
                description: "Zarya's primary fire shoots a short-range beam, while secondary fire launches an explosive charge.",
                stats: [
                    { label: "Primary Fire Damage", value: "95-190 per second (based on energy)" },
                    { label: "Secondary Fire Damage", value: "45-90 per hit (based on energy)" },
                    { label: "Secondary Fire Splash Damage", value: "0.2-46 (based on energy and distance)" },
                    { label: "Ammo", value: "100" },
                    { label: "Reload Time", value: "1.5 seconds" }
                ]
            },
            {
                name: "Particle Barrier",
                description: "Zarya surrounds herself with a barrier that absorbs damage and converts it to energy, increasing her weapon damage.",
                stats: [
                    { label: "Barrier Health", value: "200" },
                    { label: "Duration", value: "2 seconds" },
                    { label: "Cooldown", value: "10 seconds" },
                    { label: "Energy Gain", value: "1 energy per 5 damage absorbed" }
                ]
            },
            {
                name: "Projected Barrier",
                description: "Zarya surrounds an ally with a barrier that absorbs damage and converts it to energy, increasing her weapon damage.",
                stats: [
                    { label: "Barrier Health", value: "200" },
                    { label: "Duration", value: "2 seconds" },
                    { label: "Cooldown", value: "8 seconds" },
                    { label: "Energy Gain", value: "1 energy per 5 damage absorbed" }
                ]
            },
            {
                name: "Energy (Passive)",
                description: "Damage absorbed by barriers increases Zarya's weapon damage.",
                stats: [
                    { label: "Max Energy", value: "100" },
                    { label: "Decay Rate", value: "1.6 per second" },
                    { label: "Damage Bonus", value: "1% per energy" }
                ]
            },
            {
                name: "Graviton Surge (Ultimate)",
                description: "Zarya launches a gravity bomb that pulls enemies to its location and prevents their movement.",
                stats: [
                    { label: "Damage", value: "5 per second" },
                    { label: "Radius", value: "6 meters" },
                    { label: "Duration", value: "4 seconds" },
                    { label: "Ultimate Cost", value: "1680 points" }
                ]
            }
        ],
        powers: [
            {
                name: "Pre-Workout",
                description: "Gain Lifesteal equal to 20% of Energy"
            },
            {
                name: "No Limits",
                description: "Maximum Energy increased to 150. Energy always decays above 100 Energy at a 150% faster rate"
            },
            {
                name: "Piercing Beam",
                description: "Above 80 Energy, Particle Cannon's primary fire will pierce enemies"
            },
            {
                name: "Particle Accelerator",
                description: "Gain 15% Attack Speed for Particle Cannon's secondary fire. After using an ability, quadruple this bonus for 5s"
            },
            {
                name: "Volskaya Vortex",
                description: "After using a Barrier, Particle Cannon's next secondary fire spawns a slowing vortex that deals 80 damage over 2s"
            },
            {
                name: "Lifelift",
                description: "+50% Particle Barrier Size, Increase Barrier Health by 50% of Bonus Max Life"
            },
            {
                name: "Barrier Benefits",
                description: "When a Barrier expires, grant Overhealth equal to 50% of remaining Barrier health to the target for 3s"
            },
            {
                name: "Major Flex",
                description: "Barrier knocks back and deals 25 damage, increased by Energy, to enemies within 5m every 1s"
            },
            {
                name: "Containment Shield",
                description: "Barrier heals 20 Life, increased by Energy, and grants 20% Move Speed while active"
            },
            {
                name: "Here To Spot You",
                description: "Projected Barrier pulls you to the targeted ally and heals you for 20% of Max Life over 3s"
            },
            {
                name: "Graviton Anomaly",
                description: "25% Ultimate Cost Reduction, Graviton Surge base damage is increased to 30 and increased by Energy, but has 50% reduced duration"
            }
        ],
        items: {
            weapon: [
                {
                    name: "Hybrid Battery", cost: 4000,
                    description: "+5% Weapon Power, Energy cannot be reduced below 20"
                },
                {
                    name: "Bigger Beam", cost: 10000,
                    description: "+10% Weapon Power, Particle Cannon's primary fire range is increased by 20%"
                },
                {
                    name: "Blastproof Boots", cost: 3750,
                    description: "+25 Health, +5% Movement Speed, Particle Cannon's secondary fire self-knockback is increased by 100% and no longer damages yourself"
                }
            ],
            ability: [
                {
                    name: "Light Launcher",
                    cost: 4000,
                    description: "+15% Weapon Power, Consecutive Particle Cannon Secondary Fire shots consume 20% less Ammo, up to 60%, for your current magazine"
                },
                {
                    name: "Jumper Cables", cost: 4000,
                    description: "+25 Shield, +5% Ability Power, after using a Barrier, instantly start regenerating Shields"
                },
                {
                    name: "Protein Shake", cost: 4000,
                    description: "+25 Health, +15% Quick Melee Damage, while Particle Barrier is active, become Unstoppable and Quick Melee knocks back enemies"
                }
            ],
            survival: [
                {
                    name: "Beyond Barrier", cost: 4000,
                    description: "+10% Ability Power, +20% Projected Barrier Range"
                },
                {
                    name: "Lynx's Datadrive",
                    cost: 10000,
                    description: "+25 Health, +10% Ability Power, Using Projected Barrier on an ally refunds 25% of cooldown"
                },
                {
                    name: "Superconductor", cost: 10000,
                    description: "+25 Health, +15% Ability Power, +40% Barrier Duration"
                }
            ]
        }
    },
    
junkerqueen: {
    name: "Junker Queen",
    role: "Tank",
    health: 425,
    armor: 0,
    shield: 0,
    abilities: [
        {
            name: "Scattergun",
            description: "Junker Queen's shotgun deals significant damage at close range.",
            stats: [
                { label: "Damage", value: "6 per pellet, 15 pellets per shot" },
                { label: "Fire Rate", value: "1.33 shots per second" },
                { label: "Ammo", value: "6" },
                { label: "Reload Time", value: "1.5 seconds" }
            ]
        },
        {
            name: "Jagged Blade",
            description: "Junker Queen throws a knife that wounds enemies and can be recalled, pulling the first enemy hit toward her.",
            stats: [
                { label: "Damage", value: "80" },
                { label: "Wound Damage", value: "15 over 3 seconds" },
                { label: "Cooldown", value: "6 seconds" }
            ]
        },
        {
            name: "Commanding Shout",
            description: "Junker Queen rallies nearby allies, granting temporary health and increased movement speed.",
            stats: [
                { label: "Temporary Health (self)", value: "200" },
                { label: "Temporary Health (allies)", value: "100" },
                { label: "Movement Speed", value: "+30%" },
                { label: "Duration", value: "5 seconds" },
                { label: "Cooldown", value: "15 seconds" }
            ]
        },
        {
            name: "Carnage",
            description: "Junker Queen swings a large axe in an arc in front of her, wounding enemies hit.",
            stats: [
                { label: "Damage", value: "90" },
                { label: "Wound Damage", value: "40 over 3 seconds" },
                { label: "Cooldown", value: "8 seconds" }
            ]
        },
        {
            name: "Adrenaline Rush (Passive)",
            description: "Junker Queen heals from wounds applied by her abilities.",
            stats: [
                { label: "Healing", value: "100% of wound damage" }
            ]
        },
        {
            name: "Rampage (Ultimate)",
            description: "Junker Queen charges forward, wounding enemies she damages and preventing them from being healed.",
            stats: [
                { label: "Damage", value: "90" },
                { label: "Wound Damage", value: "100 over 5 seconds" },
                { label: "Anti-Heal Duration", value: "3.5 seconds" },
                { label: "Ultimate Cost", value: "1680 points" }
            ]
        }
    ],
    powers: [
        {
            name: "Thrill of Battle",
            description: "Adrenaline Rush also heals allies within 12m for 50% of the amount it heals you"
        },
        {
            name: "Royal Bullets",
            description: "Scattergun critical hits against targets within 12m applies Wound for 30 damage over 3s"
        },
        {
            name: "Twist The Knife",
            description: "Scattergun critical hits extend the duration of all Wounds on the target by 0.5s"
        },
        {
            name: "Blade Parade",
            description: "Holding Jagged Blade charges it, increasing its damage by up to 35% and causing it to knockback"
        },
        {
            name: "Cut 'Em, Gracie!",
            description: "Each enemy hit by Jagged Blade while it returns to you reduces its cooldown by 1s"
        },
        {
            name: "Merciless Magnetism",
            description: "Using Commanding Shout causes your Jagged Blade to home to a target"
        },
        {
            name: "Soaring Stone",
            description: "Carnage becomes a leaping strike if you jump during its cast time"
        },
        {
            name: "Chop Chop",
            description: "Carnage gains an additional charge but its cooldown reduction per hit is reduced to 1s"
        },
        {
            name: "Reckoner's Roar",
            description: "Using Commanding Shout Wounds enemies within 10m for 30 damage over 3s"
        },
        {
            name: "Let's Go Win",
            description: "Eliminations reset the cooldown of Commanding Shout"
        },
        {
            name: "Bloodcrazed",
            description: "Rampage and Carnage gives 15% of Max Life as Overhealth per hit"
        },
        {
            name: "Bow Down",
            description: "Rampage now also knocks down enemies hit for 1.5s"
        }
    ],
    items: {
        weapon: [
            {
                name: "Dez's Damage Dampeners",
                cost: 4000,
                description: "+25 Health, +50% Knockback Resist, when knocked back, gain 25% increased Move Speed for 3s"
            },
            {
                name: "Rebellious Spirit",
                cost: 4000,
                description: "+25 Health, when Wound gets removed instead of expiring, gain 10% of Max Life as Overhealth, up to 150"
            },
            {
                name: "Shred and Lead",
                cost: 10000,
                description: "+33% Max Ammo, +10% Weapon Lifesteal, when you Wound an enemy, gain 10% Attack Speed for 5s, stacking up to 3 times"
            }
        ],
        ability: [
            {
                name: "Bloodhound Mask",
                cost: 12000,
                description: "+15% Weapon Power, Gain 5% Weapon Power for each enemy with a Wound within 12m"
            },
            {
                name: "Slicing Spree",
                cost: 3500,
                description: "+10% Move Speed, while within 12m of an enemy with a Wound, gain 10% Move Speed and 5% Attack Speed"
            },
            {
                name: "Gutpunch Gauntlet",
                cost: 4000,
                description: "+10% Weapon Power, while not holding Jagged Blade, Quick Melee deals 75% more damage and knocks back"
            }
        ],
        survival: [
            {
                name: "Bigger Magnet",
                cost: 4000,
                description: "+10% Ability Power, Jagged Blade's pull strength is increased by 35%"
            },
            {
                name: "Scav Scraps",
                cost: 10000,
                description: "+50 Health, +5% Cooldown Reduction, Carnage and Jagged Blade impact damage grants Overhealth equal to 40% of damage dealt"
            },
            {
                name: "Thick Skull",
                cost: 10000,
                description: "+50 Armor, while casting Rampage or Carnage, gain 50% Damage Reduction"
            },
            {
                name: "Monarch's Decree",
                cost: 4000,
                description: "+5% Weapon Power, Commanding Shout grants you 15% Attack Speed"
            },
            {
                name: "Undying Loyalty",
                cost: 10000,
                description: "+50 Health, +30% Commanding Shout Overhealth, Allies affected by Commanding Shout are healed for 5% of Junker Queen's life every second"
            },
            {
                name: "Booming Voice",
                cost: 11000,
                description: "+25% Ability Power, Commanding Shout radius is increased by 100% and now ignores line of sight"
            },
            {
                name: "Tinker Tracksuit",
                cost: 9500,
                description: "+5% Cooldown Reduction, +10% Ability Lifesteal, Rampage and Carnage hits grant 10% Attack Speed for 4s"
            }
        ]
    }
},
orisa: {
    name: "Orisa",
    role: "Tank",
    health: 275,
    armor: 275,
    shield: 0,
    abilities: [
        {
            name: "Augmented Fusion Driver",
            description: "Orisa's primary weapon fires large projectiles that deal significant damage and heat up with continuous fire.",
            stats: [
                { label: "Damage", value: "12 per shot" },
                { label: "Fire Rate", value: "10 rounds per second" },
                { label: "Heat Capacity", value: "100" },
                { label: "Cooldown", value: "3 seconds (full heat)" }
            ]
        },
        {
            name: "Energy Javelin",
            description: "Orisa throws a javelin that damages the first enemy hit and knocks them back. If the enemy hits a wall, they take additional damage and are stunned.",
            stats: [
                { label: "Damage", value: "60" },
                { label: "Wall Impact Damage", value: "40" },
                { label: "Stun Duration", value: "0.3 seconds" },
                { label: "Cooldown", value: "6 seconds" }
            ]
        },
        {
            name: "Javelin Spin",
            description: "Orisa rapidly spins a javelin that destroys incoming projectiles and increases forward movement speed. Enemies hit are damaged and pushed back.",
            stats: [
                { label: "Damage", value: "90 over duration" },
                { label: "Duration", value: "1.75 seconds" },
                { label: "Cooldown", value: "7 seconds" }
            ]
        },
        {
            name: "Fortify",
            description: "Orisa temporarily reduces damage taken and cannot be affected by movement-impairing effects.",
            stats: [
                { label: "Damage Reduction", value: "40%" },
                { label: "Duration", value: "4 seconds" },
                { label: "Cooldown", value: "12.5 seconds" }
            ]
        },
        {
            name: "Terra Surge (Ultimate)",
            description: "Orisa pulls in nearby enemies and charges up a surge of damage that's released upon expiration or when reactivated.",
            stats: [
                { label: "Pull Duration", value: "4 seconds" },
                { label: "Maximum Damage", value: "500" },
                { label: "Radius", value: "9 meters" },
                { label: "Ultimate Cost", value: "1680 points" }
            ]
        }
    ],
    powers: [
        {
            name: "Scorched Earth",
            description: "When you Overheat, apply Burning to enemies within 6m, dealing damage equal to 10% of your max Life over 5s"
        },
        {
            name: "Shield Divergence",
            description: "When you Overheat, deploy a Barrier with 600 Health in front"
        },
        {
            name: "Advanced Throwbotics",
            description: "When you use Javelin Spin, launch an Energy Javelin with 50% less damage"
        },
        {
            name: "Spynstem Update",
            description: "Javelin Spin now deflects projectiles and grants 20% of damage dealt from deflecting as Ultimate Charge"
        },
        {
            name: "Hot Rotate-O",
            description: "Javelin Spin gains 35% Cooldown Reduction but now generates Heat"
        },
        {
            name: "Factory Reset",
            description: "While Fortify is active, Javelin Spin and Energy Javelin gain 25% Cooldown Reduction"
        },
        {
            name: "Lassoed",
            description: "On impact, Energy Javelin will pull enemies within 4m towards itself"
        },
        {
            name: "Ride With Me",
            description: "While Fortify is active, grant allies in line of sight 30% Move Speed and Overhealth equal to 10% of your max Life"
        },
        {
            name: "Hooves of Steel",
            description: "After Fortify ends, gain Shields equal to 50% of the damage received during Fortify. Resets when you next use Fortify"
        },
        {
            name: "Restortify",
            description: "While Fortify is active, heal for 5% of your max Life every 1s"
        },
        {
            name: "Centripetal Charge",
            description: "25% Ultimate Cost Reduction. After using Terra Surge, reset your ability cooldowns"
        },
        {
            name: "Supercharger",
            description: "When you use Terra Surge, drop a Supercharger that increases the damage of nearby allies by 25% for 15s"
        }
    ],
    items: {
        weapon: [
            {
                name: "Solar Regenergy",
                cost: 4000,
                description: "+25 Health, after using an ability, restore your Armor equal to 3% of your Max Life"
            },
            {
                name: "Enhanced Target Sensors", cost: 4000,
                description: "Deal 25% more damage to enemies farther than 12m away"
            },
            {
                name: "Optimized Energy", cost: 5000,
                description: "+10% Weapon Power, Critical Hits reduce your Heat by 5%"
            }
        ],
        ability: [
            {
                name: "Electro Lights", cost: 4000,
                description: "+10% Attack Speed, recover from being Overheated 25% faster"
            },
            {
                name: "Elite Rotator Cuff", cost: 4000,
                description: "+10% Ability Power, 35% Javelin Spin Duration"
            },
            {
                name: "Refraction Tiles",
                cost: 3000,
                description: "+25 Armor, while Javelin Spin is active, gain 30% damage reduction to beams"
            }
        ],
        survival: [
            {
                name: "Oladele-copter Blades",
                cost: 4500,
                description: "+15% Ability Power, while using Javelin Spin, gain free flight and 20% Move Speed"
            },
            {
                name: "Siphonic Spear", cost: 4000,
                description: "When you deal damage with Energy Javelin, heal a portion of your max Life over 3s"
            },
            {
                name: "Arcfinder", cost: 4000,
                description: "Energy Javelin deals 25% increased damage to enemies farther than 12m away"
            },
            {
                name: "3D-Printed Lance", cost: 11000,
                description: "+15% Ability Power, Energy Javelin cooldown is reduced by 15, but each use generates 25 Heat"
            },
            {
                name: "Charged Chassis", cost: 4000,
                description: "+25 Health, Fortify grants additional Overhealth equal to 10% of your Max Life"
            },
            {
                name: "HollaGram Helmet",
                cost: 3500,
                description: "+50 Armor, when you use Fortify, all allies within line of sight gains unstoppable for 2s"
            },
            {
                name: "Efi's Theorem",
                cost: 10000,
                description: "+20% Ability Lifesteal, +50% Fortify Duration"
            }
        ]
    }
},
cassidy: {
    name: "Cassidy",
    role: "Damage",
    health: 225,
    armor: 0,
    shield: 0,
    abilities: [
        {
            name: "Peacekeeper",
            description: "Cassidy fires his six-shooter with high precision.",
            stats: [
                { label: "Damage", value: "70 per shot" },
                { label: "Fire Rate", value: "2 shots per second" },
                { label: "Ammo", value: "6" },
                { label: "Reload Time", value: "1.2 seconds" }
            ]
        },
        {
            name: "Combat Roll",
            description: "Cassidy rolls in the direction he's moving and reloads his weapon.",
            stats: [
                { label: "Distance", value: "6 meters" },
                { label: "Cooldown", value: "6 seconds" }
            ]
        },
        {
            name: "Flashbang",
            description: "Cassidy throws a flashbang that explodes and stuns enemies.",
            stats: [
                { label: "Damage", value: "25" },
                { label: "Stun Duration", value: "0.8 seconds" },
                { label: "Radius", value: "3 meters" },
                { label: "Cooldown", value: "10 seconds" }
            ]
        },
        {
            name: "Deadeye (Ultimate)",
            description: "Cassidy takes a few moments to target enemies in view, then fires at all of them simultaneously.",
            stats: [
                { label: "Maximum Damage", value: "550 per target" },
                { label: "Lock-on Rate", value: "170 damage per second" },
                { label: "Duration", value: "7 seconds" },
                { label: "Ultimate Cost", value: "1680 points" }
            ]
        }
    ],
    powers: [
        {
            name: "Quick Draw",
            description: "After using Combat Roll, Peacekeeper's next primary fire can auto-aim within 9m while under cooldown"
        },
        {
            name: "Dead Man Walking",
            description: "Eliminating an enemy you've recently critically hit grants 1 Max Ammo for the round"
        },
        {
            name: "Full House",
            description: "For each Ammo available, Peacekeeper's primary fire gains 1% increased damage, up to 25%"
        },
        {
            name: "Just Roll With It",
            description: "During Combat Roll, prevent all incoming damage, after Combat Roll ends, heal 30% of your Life over 3s"
        },
        {
            name: "Bullseye",
            description: "Critical hit reduces Combat Roll's cooldown by 2s"
        },
        {
            name: "Barrel Roll",
            description: "Combat Roll takes you 50% further and deals 65 damage to enemies"
        },
        {
            name: "Flash In The Pan",
            description: "Eliminating an enemy recently damaged by Flashbang grants 15% Ultimate Charge"
        },
        {
            name: "Think Flasht",
            description: "When you start a Combat Roll, leave a Flashbang behind"
        },
        {
            name: "Hot Potato",
            description: "Flashbang adds 3 extra Ammo on hit until Peacekeeper is reloaded"
        },
        {
            name: "Easy Rider",
            description: "While using Deadeye, gain 100 Overhealth and 25% Movement Speed"
        },
        {
            name: "Sunrise",
            description: "Using Deadeye slows all visible enemies by 35% for 1.5s"
        },
        {
            name: "Sunset",
            description: "Deadeye eliminations grant 15% Ultimate Charge each"
        }
    ],
    items: {
        weapon: [
            {
                name: "Eagle Eye", cost: 12000,
                description: "+50 Health, Receives 25% less damage from enemy farther than 12m"
            },
            {
                name: "Competitive Analysis", cost: 11000,
                description: "+20% Weapon Lifesteal, deal 15% increased primary fire damage to enemies in the Damage role"
            },
            {
                name: "Quickload Chamber", cost: 4000,
                description: "+20% Reload Speed, reloading within 6m of an enemy adds 20% of Max Ammo as extra Ammo"
            }
        ],
        ability: [
            {
                name: "Frankie's Fixer",
                cost: 10000,
                description: "+50 Health, Heal 10 Life for each Ammo loaded using Combat Roll"
            },
            {
                name: "Streamlined Poncho", cost: 5000,
                description: "+10% Cooldown Reduction, Combat Roll reduces Flashbang cooldown"
            },
            {
                name: "Improvised Dynamite", cost: 11000,
                description: "+20% Ability Power, +10% Cooldown Reduction, Flashbang explosion radius is increased by 50%"
            }
        ],
        survival: [
            {
                name: "Wanted Poster", cost: 4000,
                description: "+25 Health, Deadeye eliminations reward extra 500 Stadium Cash each"
            },
            {
                name: "Blackwatch Tech", cost: 4000,
                description: "+10% Ability Power, Deadeye eliminations reduce Flashbang max cooldown by 10%, up to 40% for the round"
            }
        ]
    }
},
ashe: {
    name: "Ashe",
    role: "Damage",
    health: 200,
    armor: 0,
    shield: 0,
    abilities: [
        {
            name: "The Viper",
            description: "Ashe's semi-automatic rifle can be fired quickly from the hip or aimed down sights for more powerful shots.",
            stats: [
                { label: "Hip Shot Damage", value: "40 per shot" },
                { label: "ADS Damage", value: "85 per shot" },
                { label: "Fire Rate (Hip)", value: "4 shots per second" },
                { label: "Fire Rate (ADS)", value: "1.25 shots per second" },
                { label: "Ammo", value: "12" },
                { label: "Reload Time", value: "0.25 seconds per round" }
            ]
        },
        {
            name: "Coach Gun",
            description: "Ashe fires a close-range blast that knocks back both her and her target.",
            stats: [
                { label: "Damage", value: "6 per pellet, 15 pellets" },
                { label: "Cooldown", value: "10 seconds" }
            ]
        },
        {
            name: "Dynamite",
            description: "Ashe throws a stick of dynamite that detonates after a short delay or when shot. The explosion sets enemies on fire.",
            stats: [
                { label: "Initial Damage", value: "75" },
                { label: "Burn Damage", value: "100 over 5 seconds" },
                { label: "Cooldown", value: "10 seconds" }
            ]
        },
        {
            name: "B.O.B. (Ultimate)",
            description: "Ashe summons her butler robot companion, who charges forward and knocks enemies into the air, then fires his arm cannons.",
            stats: [
                { label: "Charge Damage", value: "120" },
                { label: "Gun Damage", value: "112 per second" },
                { label: "Health", value: "1200" },
                { label: "Duration", value: "10 seconds" },
                { label: "Ultimate Cost", value: "2310 points" }
            ]
        }
    ],
    powers: [
        {
            name: "Reload Therapy",
            description: "When you reload a shot, heal 3% of your Life"
        },
        {
            name: "Head Honcho",
            description: "Each unscoped shot you land increases the damage of the next scoped shot you land by 3%, up to 30%. Resets on reload"
        },
        {
            name: "My Business, My Rules",
            description: "When you deal damage to a Burning enemy with The Viper, reduce the cooldown of your abilities by 10%"
        },
        {
            name: "Incendiary Rounds",
            description: "While scoped, hitting the same target without missing deals 30 extra damage"
        },
        {
            name: "Incendiary Blast",
            description: "Coach Gun applies Burning, dealing 100 damage over 5s. If target was burning, deal extra 75 Ability Damage instantly"
        },
        {
            name: "Calamity",
            description: "Using Coach Gun reloads 2 Ammo. The Viper's next 2 hits deal 40 additional damage over 3s"
        },
        {
            name: "Double Barreled",
            description: "Coach Gun gains an additional charge"
        },
        {
            name: "Early Detonation",
            description: "Shooting Dynamite reloads 5 Ammo and reduces the cooldown of Dynamite by 3s"
        },
        {
            name: "Molten Munitions",
            description: "When Dynamite explodes on the ground, it leaves lava that Burns enemies for 50 every 1s"
        },
        {
            name: "Out with a Bang",
            description: "When Dynamite explodes, it spawns 3 sticky explosives that deal 66% reduced damage"
        },
        {
            name: "Partners in Crime",
            description: "You are healed for 100% of B.O.B.'s damage dealt and B.O.B. is healed for 100% of your damage dealt"
        },
        {
            name: "B.O.B. Jr.",
            description: "B.O.B. costs 50% less Ultimate Charge but has reduced Life, 50% reduced Attack Speed, and is significantly smaller"
        }
    ],
    items: {
        weapon: [
            {
                name: "Tripod", cost: 4000,
                description: "+5% Weapon Power, The Viper, Coach Gun, and Dynamite deal 10% more damage to enemies that are below you"
            },
            {
                name: "Silver Lighter", cost: 4000,
                description: "+10% Ability Power, Damage dealt to Burning targets grants 20% more Ultimate Charge"
            },
            {
                name: "Greased Loader", cost: 5000,
                description: "25% Max Ammo, +15% Reload Speed"
            }
        ],
        ability: [
            {
                name: "Maxed Mag", cost: 4000,
                description: "+5% Attack Speed, Gain 3% Attack Speed for each remaining Ammo above 50% of your Max Ammo"
            },
            {
                name: "Ironsights", cost: 11000,
                description: "+10% Attack Speed, when the target is further than 10m, scoped shot gains 1% damage for each meter"
            },
            {
                name: "Sidewinder", cost: 11000,
                description: "+10% Attack Speed, when the target is within 10m, unscoped shot gains 15% increased damage"
            }
        ],
        survival: [
            {
                name: "Furnace Fuel", cost: 4000,
                description: "+25 Health, +5% Ability Power, When Burn gets removed instead of expiring, gain 3% Ultimate Charge"
            },
            {
                name: "Stacked Sticks", cost: 10000,
                description: "+15% Ability Power, 40% Dynamite Explosion Radius"
            },
            {
                name: "Firestarter", cost: 10000,
                description: "+50 Health, Your Burning effects gain 35% Lifesteal"
            },
            {
                name: "Silver Spurs", cost: 4000,
                description: "+25 Health, after using Coach Gun, gain 20% Move Speed for 3s"
            },
            {
                name: "Build-A-Blast Buckshot", cost: 10000,
                description: "+10% Cooldown Reduction, Coach Gun has 50% increased self-knockback"
            },
            {
                name: "Infrared Lenses", cost: 10000,
                description: "+20% Ability Power, deal 25% increased damage to Burning targets"
            },
            {
                name: "B.O.B. Wire Defense", cost: 10000,
                description: "+50 Health, +25 Armor, when B.O.B. finishes charging, B.O.B. gains 300 Armor"
            }
        ]
    }
},
ana: {
    name: "Ana",
    role: "Support",
    health: 200,
    armor: 0,
    shield: 0,
    abilities: [
        {
            name: "Biotic Rifle",
            description: "Ana's rifle fires darts that can heal allies or damage enemies. Scoping provides greater accuracy but lower fire rate.",
            stats: [
                { label: "Damage/Healing", value: "70 per shot" },
                { label: "Fire Rate (Unscoped)", value: "1.25 shots per second" },
                { label: "Fire Rate (Scoped)", value: "1.25 shots per second" },
                { label: "Ammo", value: "15" },
                { label: "Reload Time", value: "1.5 seconds" }
            ]
        },
        {
            name: "Sleep Dart",
            description: "Ana fires a dart that puts an enemy to sleep for a short duration.",
            stats: [
                { label: "Sleep Duration", value: "5 seconds" },
                { label: "Cooldown", value: "14 seconds" }
            ]
        },
        {
            name: "Biotic Grenade",
            description: "Ana throws a grenade that heals allies and damages enemies. Affected allies receive increased healing, while enemies cannot be healed for a short duration.",
            stats: [
                { label: "Damage", value: "60" },
                { label: "Healing", value: "100" },
                { label: "Healing Boost", value: "+50%" },
                { label: "Anti-Heal Duration", value: "3 seconds" },
                { label: "Radius", value: "4 meters" },
                { label: "Cooldown", value: "10 seconds" }
            ]
        },
        {
            name: "Nano Boost (Ultimate)",
            description: "Ana empowers an ally, increasing their damage output and providing damage reduction.",
            stats: [
                { label: "Damage Increase", value: "+50%" },
                { label: "Damage Reduction", value: "50%" },
                { label: "Duration", value: "8 seconds" },
                { label: "Ultimate Cost", value: "2100 points" }
            ]
        }
    ],
    powers: [
        {
            name: "No Scope Needed",
            description: "Landing unscoped shots with Biotic Rifle grants 10% Attack Speed for 2s, stacking up to 3 times"
        },
        {
            name: "Tactical Rifle",
            description: "While scoped, Biotic Rifle will lock-on to allies for guaranteed hits"
        },
        {
            name: "Pinpoint Prescription",
            description: "Biotic Rifle can now critically hit both allies and enemies"
        },
        {
            name: "Dreamy",
            description: "Sleep Dart can hit allies, healing 100% of their max Life over 4s instead of putting them to sleep"
        },
        {
            name: "Comfy Cloud",
            description: "Sleep Dart explodes on contact, hitting targets within 3m, but Sleep has a 50% reduced duration"
        },
        {
            name: "Sleep Regimen",
            description: "Gain 50 Health. When you apply Sleep to an enemy, gain 10 Health, up to 150"
        },
        {
            name: "Home Remedy",
            description: "Biotic Grenade applies Overhealth equal to 100% of its healing"
        },
        {
            name: "Venomous",
            description: "Biotic Grenade deals an additional 30 damage over its duration to enemies affected by it"
        },
        {
            name: "Time Out",
            description: "Biotic Grenade now knocks enemies back and reduces their Move Speed by 50% for 1.5s"
        },
        {
            name: "Your Full Potential",
            description: "Nano Boost also grants the target 20% Ultimate Charge and 200 Overhealth"
        },
        {
            name: "My Turn",
            description: "Nano Boost also applies to yourself for 50% of its duration"
        },
        {
            name: "Our Turn",
            description: "Nano Boost also affects other visible allies, but it has a 50% reduced duration"
        }
    ],
    items: {
        weapon: [
            {
                name: "Dash Boots", cost: 4000,
                description: "+5% Movement Speed, jumping in mid-air will dash you a short distance"
            },
            {
                name: "Potent Projectiles", cost: 5000,
                description: "+10% Weapon Power, Unscoped Biotic Rifle projectiles are 100% larger"
            },
            {
                name: "Quick Scope", cost: 5000,
                description: "+5% Weapon Power, +200% Faster Scope Speed, Deal 20% more damage to airborne enemies"
            }
        ],
        ability: [
            {
                name: "Unscoped Resources", cost: 11000,
                description: "+4 Max Ammo, Unscoped shots have a 50% chance not to consume Ammo"
            },
            {
                name: "Double Dose",
                cost: 4000,
                description: "+25 Health, landing a Sleep Dart on target affected by Biotic Grenade reduces its cooldown by 25%"
            },
            {
                name: "Tranquilizer", cost: 10000,
                description: "Sleep Dart gains: 500% Collision Size, 100% Projectile Speed, 20% Sleep Duration"
            }
        ],
        survival: [
            {
                name: "Lethal Dose", cost: 9000,
                description: "+50% Ability Lifesteal, Sleep Dart damage is increased by 100"
            },
            {
                name: "I.V. Drip", cost: 4000,
                description: "+25 Health, while affected by Biotic Grenade, Ana gains 100 Overhealth"
            },
            {
                name: "Grenadius Pin", cost: 12000,
                description: "+30% Biotic Grenade Radius, +20% Ability Power"
            },
            {
                name: "Target Tracker", cost: 4000,
                description: "+15% Biotic Grenade Duration, for each enemy or ally affected by Biotic Grenade, gain 5% Attack Speed, up to 25%"
            },
            {
                name: "Cluster Core", cost: 10000,
                description: "+25% Ability Lifesteal, Biotic Grenade cooldown is reduced by 1s for each target it hits"
            },
            {
                name: "Eye of Horus", cost: 9000,
                description: "+50 Shields, Nano Boost can target allies through walls and its range is increased to 60m"
            },
            {
                name: "Perfected Formula",
                cost: 2500,
                description: "+25 Shields, +15% Nano Boost Duration"
            }
        ]
    }
},
mercy: {
    name: "Mercy",
    role: "Support",
    health: 200,
    armor: 0,
    shield: 0,
    abilities: [
        {
            name: "Caduceus Staff",
            description: "Mercy's staff heals allies or increases the damage they deal.",
            stats: [
                { label: "Healing", value: "55 per second" },
                { label: "Damage Boost", value: "+30%" },
                { label: "Range", value: "15 meters" }
            ]
        },
        {
            name: "Caduceus Blaster",
            description: "Mercy's sidearm fires rapid projectiles.",
            stats: [
                { label: "Damage", value: "20 per shot" },
                { label: "Fire Rate", value: "5 rounds per second" },
                { label: "Ammo", value: "20" },
                { label: "Reload Time", value: "1.4 seconds" }
            ]
        },
        {
            name: "Guardian Angel",
            description: "Mercy flies towards a targeted ally.",
            stats: [
                { label: "Range", value: "30 meters" },
                { label: "Cooldown", value: "1.5 seconds" }
            ]
        },
        {
            name: "Angelic Descent",
            description: "Mercy slows her descent from great heights.",
            stats: [
                { label: "Fall Speed Reduction", value: "70%" }
            ]
        },
        {
            name: "Resurrect",
            description: "Mercy revives a dead ally with full health.",
            stats: [
                { label: "Range", value: "5 meters" },
                { label: "Cast Time", value: "1.75 seconds" },
                { label: "Cooldown", value: "30 seconds" }
            ]
        },
        {
            name: "Valkyrie (Ultimate)",
            description: "Mercy enhances her abilities and gains the ability to fly.",
            stats: [
                { label: "Healing/Damage Boost", value: "60/30 per second" },
                { label: "Beam Range", value: "20 meters" },
                { label: "Chain Range", value: "10 meters" },
                { label: "Duration", value: "15 seconds" },
                { label: "Ultimate Cost", value: "1820 points" }
            ]
        }
    ],
    powers: [
        {
            name: "Battle Medic",
            description: "Every 1s your Staff is attached, Caduceus Blaster gains +4% Attack Speed (stacks 10 times) until reloading or swap to your Staff"
        },
        {
            name: "First Responder",
            description: "When you Resurrect an ally, grant both of you 250 Overhealth for 6s"
        },
        {
            name: "The Whambulance",
            description: "When Guardian Angel ends or is canceled, heal your target for 4 Life for every 1m you traveled"
        },
        {
            name: "Renaissance",
            description: "After successfully Resurrecting an ally, gain Valkyrie for 5 seconds"
        },
        {
            name: "Equivalent Exchange",
            description: "You have 3 charges of Resurrect with 33% reduced cast time, but their cooldowns only reset at the start of the round"
        },
        {
            name: "Triage Unit",
            description: "When using Guardian Angel on an ally below 50% HP, your Caduceus Staff heals them for 30% more for 3 sec"
        },
        {
            name: "Threads of Fate",
            description: "Caduceus Staff healing chains for 3 sec at 50% effectiveness to the last ally healed"
        },
        {
            name: "Protective Beam",
            description: "Allies affected by Caduceus Staff above 80% HP gain 10% damage reduction"
        },
        {
            name: "Serenity",
            description: "Sympathetic Recovery heals for 20% more and heals you even while healing a full health ally"
        },
        {
            name: "Distortion",
            description: "Allies boosted by your Caduceus Staff gain +20% Lifesteal"
        },
        {
            name: "Crepuscular Circle",
            description: "While Valkyrie is active, Healing Beam and Damage Boost effects are automatically applied to nearby allies"
        },
        {
            name: "Glass Extra Full",
            description: "Healing from Caduceus Staff targeting full health allies is converted to Overhealth, up to 50"
        }
    ],
    items: {
        weapon: [
            {
                name: "Mid-Air Mobilizer", cost: 4000,
                description: "+5% Weapon Power, 10% Attack Speed while flying"
            },
            {
                name: "Aerodynamic Feathers", cost: 4000,
                description: "+25 Health, while affected by Angelic Descent, continuously gain 10% Move Speed every 1s"
            },
            {
                name: "Angeleisure Wear", cost: 4000,
                description: "+25 Health, while affected by Angelic Descent or Guardian Angel, heal 3% of your Life every 1s"
            }
        ],
        ability: [
            {
                name: "Long Distance Wings", cost: 4000,
                description: "+10% Ability Power, +33% Guardian Angel Range"
            },
            {
                name: "Angelic Acrobatics", cost: 10000,
                description: "+15% Guardian Angel Move Speed, Guardian Angel's cooldown starts as soon as you jump or crouch"
            },
            {
                name: "Blessed Boosters", cost: 9000,
                description: "+50 Health, launch velocity is increased by 25% when canceling Guardian Angel with crouch or jump"
            }
        ],
        survival: [
            {
                name: "Chain Evoker", cost: 10000,
                description: "+50 Armor, +5% Caduceus Staff damage boost, +15% Ultimate Charge gained from damage boosted"
            },
            {
                name: "Celestial Clip", cost: 10000,
                description: "+10% Weapon Power, +33% Max Ammo, Caduceus Blaster has a 10% chance to fire an extra shot that doesn't consume additional ammo"
            },
            {
                name: "Caduceus EX",
                cost: 3500,
                description: "+25 Health, +10% Weapon Power, +33% Caduceus Staff Range"
            },
            {
                name: "Resurrection Rangefinder", cost: 10000,
                description: "+10% Cooldown Reduction, +75% Resurrection Range"
            }
        ]
    }
},
lucio: {
    name: "Lúcio",
    role: "Support",
    health: 200,
    armor: 0,
    shield: 0,
    abilities: [
        {
            name: "Sonic Amplifier",
            description: "Lúcio's primary weapon fires sonic projectiles in a four-round burst.",
            stats: [
                { label: "Damage", value: "20 per shot" },
                { label: "Fire Rate", value: "4 shots per burst" },
                { label: "Ammo", value: "20" },
                { label: "Reload Time", value: "1.5 seconds" }
            ]
        },
        {
            name: "Soundwave",
            description: "Lúcio emits a blast of sound that knocks enemies back.",
            stats: [
                { label: "Damage", value: "25" },
                { label: "Knockback", value: "8 meters" },
                { label: "Cooldown", value: "4 seconds" }
            ]
        },
        {
            name: "Crossfade",
            description: "Lúcio can switch between two songs: one that heals nearby allies and one that increases their movement speed.",
            stats: [
                { label: "Healing", value: "16.25 per second" },
                { label: "Speed Boost", value: "+25%" },
                { label: "Radius", value: "12 meters" }
            ]
        },
        {
            name: "Amp It Up",
            description: "Lúcio increases the effectiveness of his current song.",
            stats: [
                { label: "Healing Boost", value: "52 per second" },
                { label: "Speed Boost", value: "+60%" },
                { label: "Duration", value: "3 seconds" },
                { label: "Cooldown", value: "12 seconds" }
            ]
        },
        {
            name: "Wall Ride (Passive)",
            description: "Lúcio can jump onto a wall and ride along it.",
            stats: [
                { label: "Speed Boost", value: "+30%" }
            ]
        },
        {
            name: "Sound Barrier (Ultimate)",
            description: "Lúcio provides himself and nearby allies with temporary shields.",
            stats: [
                { label: "Shields", value: "750" },
                { label: "Decay Rate", value: "125 per second" },
                { label: "Radius", value: "30 meters" },
                { label: "Ultimate Cost", value: "2940 points" }
            ]
        }
    ],
    powers: [
        {
            name: "Mixtape",
            description: "When switching to Healing Boost, Crossfade heals for 10% of Crossfade healing for every 1s Speed Boost was active"
        },
        {
            name: "Fast Forward",
            description: "While above 50% Move Speed, increase damage by 25%"
        },
        {
            name: "Wallvibing",
            description: "While Wallriding, gain Overhealth equal to 3% of your life every 1s, up to 30% Max Life"
        },
        {
            name: "Vivace",
            description: "While you are Wallriding, Soundwave cooldown refreshes 25% faster and adds 1 Max Ammo every 1s until you reload"
        },
        {
            name: "Sonic Boom",
            description: "Sonic Amplifier damage heal allies affected by Crossfade equal to 20% of damage dealt"
        },
        {
            name: "Signature Shift",
            description: "After using an ability, your next Sonic Amplifier shot shoots a volley of 6 ammo with 80% increased projectile size"
        },
        {
            name: "Radio Edit",
            description: "After using Amp It Up in Speed Boost, trigger a Sound Barrier with 85% reduced Overhealth"
        },
        {
            name: "Megaphone",
            description: "+15% Amp It Up Duration, while Amp It Up is active, Crossfade radius is increased by 100%"
        },
        {
            name: "Crowd Pleaser",
            description: "After using Soundwave, heal all allies affected by Crossfade for 150% of Crossfade healing"
        },
        {
            name: "Let's Bounce",
            description: "Soundwave has 30% increased knockback and deals 40 bonus damage if the target hits a wall"
        },
        {
            name: "Reverb",
            description: "Gain 1 extra charge of Soundwave"
        },
        {
            name: "Beat Drop",
            description: "Landing on an enemy with Sound Barrier deals up to 100 damage. If you spent your Ultimate Charge, your next Sound Barrier deals double damage"
        }
    ],
    items: {
        weapon: [
            {
                name: "#1 Single",
                cost: 3500,
                description: "+10% Ability Power, when allies leave your Crossfade area, the effect lingers for 2s"
            },
            {
                name: "Nano Boop", cost: 4000,
                description: "+5% Cooldown Reduction, Environmental Kills grant Nano Boost for 5s"
            },
            {
                name: "Speed Skates", cost: 3750,
                description: "+25 Health, after Wallriding, gain 30% Move Speed for 2s"
            }
        ],
        ability: [
            {
                name: "Hip Hop", cost: 9000,
                description: "+25 Health, after Wallriding, gain an additional jump while airborne"
            },
            {
                name: "All-Out Auditiva", cost: 11000,
                description: "+20% Ability Power, +33% Amp It Up Duration"
            },
            {
                name: "LoFly Beats",
                cost: 3500,
                description: "+5% Ability Power, +5% Weapon Power, while in Speed Boost, Soundwave also knocks you back"
            }
        ],
        survival: [
            {
                name: "B-Side Bop", cost: 10000,
                description: "+50 Health, +25% Melee Damage, after using Soundwave, your next Quick Melee grants decaying Overhealth equal to 100% of damage dealt"
            },
            {
                name: "Riff Repeater", cost: 10000,
                description: "+15% Attack Speed, Sonic Amplifier projectiles ricochet off walls 3 times"
            },
            {
                name: "Airwaves", cost: 10000,
                description: "+25 Health, +15% Ability Power, Sound Barrier effectiveness is increased by 5% for every 1s Sound Barrier is channeled, up to 50%"
            }
        ]
    }
},
juno: {
    name: "Juno",
    role: "Support",
    health: 200,
    armor: 0,
    shield: 0,
    abilities: [
        {
            name: "Mediblaster",
            description: "Juno's primary weapon fires projectiles that heal allies or damage enemies.",
            stats: [
                { label: "Damage", value: "45 per shot" },
                { label: "Healing", value: "70 per shot" },
                { label: "Fire Rate", value: "1.67 shots per second" },
                { label: "Ammo", value: "8" },
                { label: "Reload Time", value: "1.5 seconds" }
            ]
        },
        {
            name: "Pulsar Torpedoes",
            description: "Juno fires a torpedo that homes in on allies to heal them or enemies to damage them.",
            stats: [
                { label: "Damage", value: "80" },
                { label: "Healing", value: "100" },
                { label: "Cooldown", value: "6 seconds" }
            ]
        },
        {
            name: "Glide Boost",
            description: "Juno propels herself in the direction she's moving.",
            stats: [
                { label: "Duration", value: "2 seconds" },
                { label: "Cooldown", value: "6 seconds" }
            ]
        },
        {
            name: "Hyper Ring",
            description: "Juno places a ring that grants allies increased movement and attack speed.",
            stats: [
                { label: "Movement Speed", value: "+25%" },
                { label: "Attack Speed", value: "+20%" },
                { label: "Duration", value: "5 seconds" },
                { label: "Cooldown", value: "10 seconds" }
            ]
        },
        {
            name: "Orbital Ray (Ultimate)",
            description: "Juno channels a beam from orbit that heals allies and damages enemies caught in it.",
            stats: [
                { label: "Healing", value: "80 per second" },
                { label: "Damage", value: "60 per second" },
                { label: "Duration", value: "8 seconds" },
                { label: "Ultimate Cost", value: "2100 points" }
            ]
        }
    ],
    powers: [
        {
            name: "MediMaster",
            description: "Mediblaster can now critically hit both allies and enemies"
        },
        {
            name: "Stinger",
            description: "Mediblaster deals an additional 10 damage to enemies over 1s. (Does not stack)"
        },
        {
            name: "Cosmic Coolant",
            description: "Pulsar Torpedoes cooldown is reduced by 0.5s for each target it hits"
        },
        {
            name: "Medicinal Missiles",
            description: "Pulsar Torpedoes heal for an extra 30 life and causes allies hit to receive 50% more healing for 3s"
        },
        {
            name: "Pulsar Plus",
            description: "Pulsar Torpedoes gains 1 additional charge"
        },
        {
            name: "Torpedo Glide",
            description: "During Glide Boost, every 50 damage you deal reduces the cooldown of Pulsar Torpedoes by 1s"
        },
        {
            name: "Blink Boosts",
            description: "Glide Boost gains 2 additional charges and has a 65% reduced cooldown, but has 75% reduced duration"
        },
        {
            name: "Rally Ring",
            description: "Reduce Hyper Ring's cooldown by 1s when an ally passes through it"
        },
        {
            name: "Black Hole",
            description: "Hyper Ring slows the Move Speed of enemies who pass through it by 35% for 1s"
        },
        {
            name: "Hyper Healer",
            description: "Allies affected by Hyper Ring gain 50 Overhealth"
        },
        {
            name: "Stellar Focus",
            description: "Orbital Ray now follows you and its duration is increased by 35%"
        },
        {
            name: "Orbital Alignment",
            description: "Enemies inside of Orbital Ray lose 35% Move Speed. Allies inside of it gain 25% Move Speed"
        }
    ],
    items: {
        weapon: [
            {
                name: "Vantage Shot", cost: 4000,
                description: "+5% Weapon Power, while airborne, Mediblaster deals 15% more damage"
            },
            {
                name: "Long Range Blaster", cost: 12000,
                description: "+15% Weapon Power, Mediblaster deals 15% increased damage and healing to targets farther than 12m away"
            },
            {
                name: "Lock-On Shield", cost: 4000,
                description: "+10% Ability Power, while aiming Pulsar Torpedoes, gain Overhealth equal to 50% of your max Shields"
            }
        ],
        ability: [
            {
                name: "PulStar Destroyers",
                cost: 3200,
                description: "+10% Ability Lifesteal, Pulsar Torpedoes explode on hit, deal 20 damage to nearby enemies"
            },
            {
                name: "Pulse Spike", cost: 10000,
                description: "+10% Attack Speed, +35% Pulsar Torpedoes Projectile Speed, after using Pulsar Torpedoes, gain 25% Attack Speed for 4s"
            },
            {
                name: "Boosted Rockets", cost: 4000,
                description: "+25 Shield, +25% Glide Boost Duration"
            }
        ],
        survival: [
            {
                name: "Forti-Glide",
                cost: 4500,
                description: "+75 Shield, during Glide Boost, gain 10% Damage Reduction"
            },
            {
                name: "Gravitational Push", cost: 10000,
                description: "+15% Weapon Power, during Glide Boost, gain 20% Attack Speed and your Quick Melee knocks enemies back"
            },
            {
                name: "Lux Loop", cost: 4000,
                description: "+10% Ability Power, +25% Hyper Ring Duration"
            },
            {
                name: "Solar Shielding", cost: 10000,
                description: "+25% Ability Power, allies affected by Hyper Ring restore Shields every 1s"
            },
            {
                name: "Sunburst Serum", cost: 10000,
                description: "+75 Shield, Orbital Ray gains 25% increased healing"
            },
            {
                name: "Red Promise Regulator",
                cost: 4000,
                description: "+50 Shield, +15% Ability Power, when you use Orbital Ray, reset your cooldowns"
            }
        ]
    }
}
};// Hero data