// Main app functionality
document.addEventListener('DOMContentLoaded', () => {
    const heroSelector = document.getElementById('hero-selector');
    const heroInfo = document.getElementById('hero-info');
    const heroBuilder = document.getElementById('hero-build-container');
    const shareBtn = document.getElementById('share-btn');
    const buildCodeDisplay = document.getElementById('build-code');
    
    // Page references
    const overviewPage = document.getElementById('overview-page');
    const powersPage = document.getElementById('powers-page');
    const heroItemsPage = document.getElementById('hero-items-page');
    const universalItemsPage = document.getElementById('universal-items-page');
    
    // Selected powers and items tracking
    let selectedPowers = [];
    let selectedItems = [];
    let selectedHero = null;
    loadBuildFromURL();
    setupShareFeatures();
    // Define base stats for each hero
    const heroBaseStats = {
        reaper: {
            'Health': 250,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        dva: {
            'Health': 300,
            'Armor': 300,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        moira: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        reinhardt: {
            'Health': 500,
            'Armor': 125,
            'Shield': 1600,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        soldier76: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        kiriko: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        genji: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        mei: {
            'Health': 250,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        zarya: {
            'Health': 250,
            'Armor': 0,
            'Shield': 225,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        junkerqueen: {
            'Health': 425,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        orisa: {
            'Health': 275,
            'Armor': 275,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        cassidy: {
            'Health': 225, 
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        ashe: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        ana: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        mercy: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        lucio: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        },
        juno: {
            'Health': 200,
            'Armor': 0,
            'Shield': 0,
            'Weapon Power': 100,
            'Ability Power': 100,
            'Attack Speed': 100,
            'Move Speed': 100,
            'Cooldown Reduction': 0,
            'Weapon Lifesteal': 0,
            'Ability Lifesteal': 0
        }
    
    };
    
    // Current hero stats and modifiers
    let currentHeroStats = {};
    let statModifiers = {};
    
    // Pattern to match stat patterns in item descriptions
    const statPatterns = [
        { regex: /\+(\d+)\s*Health/g, stat: 'Health', isPercentage: false },
        { regex: /\+(\d+)\s*Armor/g, stat: 'Armor', isPercentage: false },
        { regex: /\+(\d+)\s*Shield/g, stat: 'Shield', isPercentage: false },
        { regex: /\+(\d+)%\s*Weapon Power/g, stat: 'Weapon Power', isPercentage: true },
        { regex: /\+(\d+)%\s*Ability Power/g, stat: 'Ability Power', isPercentage: true },
        { regex: /\+(\d+)%\s*Attack Speed/g, stat: 'Attack Speed', isPercentage: true },
        { regex: /\+(\d+)%\s*Move Speed/g, stat: 'Move Speed', isPercentage: true },
        { regex: /\+(\d+)%\s*Cooldown Reduction/g, stat: 'Cooldown Reduction', isPercentage: true },
        { regex: /\+(\d+)%\s*Weapon Lifesteal/g, stat: 'Weapon Lifesteal', isPercentage: true },
        { regex: /\+(\d+)%\s*Ability Lifesteal/g, stat: 'Ability Lifesteal', isPercentage: true }
    ];
    
    // Helper function to map item names to icon filenames (PNG format)
    function getIconFileName(itemName) {
        // Keep the original name including spaces and special characters, just use PNG extension
        return itemName + '.png';
    }
    
    // Helper function to map power names to icon filenames (PNG format)
    function getPowerIconFileName(powerName) {
        // Keep the original name including spaces and special characters, just use PNG extension
        return powerName + '.png';
    }
    
    // Function to get hero icon path
    function getHeroIconPath(heroName) {
        if (heroName.includes("Soldier")) return `images/heroes/Soldier76/soldier76.png`;
        return `images/heroes/${heroName}/${heroName.toLowerCase()}.png`;
    }

    // Function to get ability icon path
    function getAbilityIconPath(heroName, abilityName) {
        return `images/heroes/${heroName}/Abilities/${abilityName}.png`;
    }
    
    // Fallback function to generate colored icon with initial if image doesn't load
    function handleImageError(img) {
        // Get name from alt attribute
        const name = img.alt || 'X';
        
        // Determine category from parent elements
        let category = 'unknown';
        if (img.closest('.item-card')) {
            category = img.closest('.item-card').dataset.category;
        } else if (img.closest('.power-card')) {
            category = 'power';
        }
        
        // Determine color based on category
        let bgColor;
        if (category === 'weapon') {
            bgColor = '#ff7e33'; // Weapon color
        } else if (category === 'ability') {
            bgColor = '#4adfff'; // Ability color
        } else if (category === 'survival') {
            bgColor = '#83ff52'; // Survival color
        } else if (category === 'power') {
            bgColor = '#ff9c1e'; // Power color
        } else {
            bgColor = '#b0b0b0'; // Default gray
        }
        
        // Create a canvas to draw our fallback icon
        const canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 40;
        const ctx = canvas.getContext('2d');
        
        // Fill with background color
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, 40, 40);
        
        // Draw initial letter
        ctx.fillStyle = 'white';
        ctx.font = 'bold 20px "Rajdhani", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name.charAt(0), 20, 20);
        
        // Replace image source with canvas data
        img.src = canvas.toDataURL('image/png');
        // Remove error handler to prevent infinite loops
        img.onerror = null;
    }
    
    // When updating the DOM, add error handlers to all images
    function setupImageErrorHandlers() {
        document.querySelectorAll('.item-icon img, .power-icon img, .summary-item-icon img, .ability-icon img, .hero-profile img, .build-hero-icon img, .saved-build-hero-icon img').forEach(img => {
            if (!img.dataset.hasErrorHandler) {
                img.onerror = function() {
                    handleImageError(this);
                };
                img.dataset.hasErrorHandler = 'true';
            }
        });
    }
    function safeBase64Decode(str) {
        try {
          // Decode base64 and use decodeURIComponent to handle non-Latin1 characters
          const decoded = decodeURIComponent(atob(str));
          return JSON.parse(decoded);
        } catch (e) {
          console.error("Error decoding build data:", e);
          return null;
        }
      }
    
    // Tab navigation
    function setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const tabName = button.dataset.tab;
                const pages = document.querySelectorAll('.page');
                pages.forEach(page => page.classList.remove('active'));
                document.getElementById(`${tabName}-page`).classList.add('active');
                
                // When switching to overview tab, update with current stats
                if (tabName === 'overview') {
                    updateOverviewPage();
                }
            });
        });
    }
    
    // Function to reset stats when hero changes
    function resetStats() {
        if (selectedHero) {
            currentHeroStats = JSON.parse(JSON.stringify(heroBaseStats[selectedHero]));
            statModifiers = {};
            updateStatsDisplay();
        }
    }
    
    // Function to parse item description and extract stat changes
    function parseItemStats(itemId, description, isAdding) {
        const multiplier = isAdding ? 1 : -1;
        
        statPatterns.forEach(pattern => {
            const matches = [...description.matchAll(pattern.regex)];
            
            matches.forEach(match => {
                const value = parseFloat(match[1]);
                
                if (!statModifiers[itemId]) {
                    statModifiers[itemId] = {};
                }
                
                statModifiers[itemId][pattern.stat] = (pattern.isPercentage ? value : value) * multiplier;
            });
        });
    }
    
    // Function to find item description for an item
    function findItemDescription(itemId, itemName) {
        // First check if the item exists in the hero's items
        if (heroes[selectedHero]) {
            for (const category in heroes[selectedHero].items) {
                const foundItem = heroes[selectedHero].items[category].find(item => 
                    item.name === itemName || item.name.toLowerCase().replace(/\s/g, '-') === itemId);
                
                if (foundItem) {
                    return foundItem.description;
                }
            }
        }
        
        // Then check universal items
        for (const category in universalItems) {
            const foundItem = universalItems[category].find(item => 
                item.name === itemName || 'universal-' + item.name.toLowerCase().replace(/\s/g, '-') === itemId);
            
            if (foundItem) {
                return foundItem.description;
            }
        }
        return '';
    }
    
    // Calculate the updated stats based on base values and modifiers
    function calculateUpdatedStats() {
        // Start with base stats
        const updatedStats = { ...heroBaseStats[selectedHero] };
        
        // Apply all modifiers
        for (const itemId in statModifiers) {
            const modifiers = statModifiers[itemId];
            
            for (const stat in modifiers) {
                const value = modifiers[stat];
                
                if (stat === 'Health' || stat === 'Armor' || stat === 'Shield') {
                    // Direct addition for health, armor, shield
                    updatedStats[stat] += value;
                } else {
                    // Percentage addition for other stats
                    updatedStats[stat] += value;
                }
            }
        }
        
        // Update current stats
        currentHeroStats = updatedStats;
    }
    
    // Function to update stats when items are selected/deselected
    function updateStatsFromItems() {
        // Reset to base stats
        resetStats();
        
        // Apply modifiers from all selected items
        selectedItems.forEach(item => {
            const itemDescription = item.description || findItemDescription(item.id, item.name);
            
            if (itemDescription) {
                parseItemStats(item.id, itemDescription, true);
            }
        });
        
        // Calculate new stats
        calculateUpdatedStats();
        
        // Update the UI
        updateStatsDisplay();
        
        // Update overview page if active
        const overviewPageElement = document.getElementById('overview-page');
        if (overviewPageElement.classList.contains('active')) {
            updateOverviewPage();
        }
    }
    
    // Create and update the stats display panel
    function updateStatsDisplay() {
        const statsContainer = document.getElementById('hero-stats-panel');
        if (!statsContainer) return;
        
        const hero = heroes[selectedHero];
        if (!hero) return;
        
        let statsHTML = `<h3>Current Stats</h3><div class="stats-grid">`;
        
        // Display health, armor, shield stats
        const healthValue = currentHeroStats['Health'] || hero.health;
        const armorValue = currentHeroStats['Armor'] || hero.armor;
        const shieldValue = currentHeroStats['Shield'] || hero.shield;
        
        const healthDiff = healthValue - hero.health;
        const armorDiff = armorValue - hero.armor;
        const shieldDiff = shieldValue - hero.shield;
        
        // Create tickbar for health
        const maxHealth = 500; // Base value for 100% width
        const healthPercent = Math.min(100, (healthValue / maxHealth) * 100);
        
        statsHTML += `
            <div class="stat-item ${healthDiff !== 0 ? 'modified' : ''}">
                <span class="stat-label">Health:</span>
                <div class="stat-value-container">
                    <span class="stat-value stat-health">${healthValue}${healthDiff !== 0 ? 
                        `<span class="stat-bonus">${healthDiff > 0 ? '+' : ''}${healthDiff}</span>` : ''}
                    </span>
                    <div class="stat-tickbar-container">
                        <div class="stat-tickbar stat-tickbar-health" style="width: ${healthPercent}%"></div>
                    </div>
                </div>
            </div>
        `;
        
        if (hero.armor > 0 || armorValue > 0) {
            const maxArmor = 300; // Base value for 100% width
            const armorPercent = Math.min(100, (armorValue / maxArmor) * 100);
            
            statsHTML += `
                <div class="stat-item ${armorDiff !== 0 ? 'modified' : ''}">
                    <span class="stat-label">Armor:</span>
                    <div class="stat-value-container">
                        <span class="stat-value stat-armor">${armorValue}${armorDiff !== 0 ? 
                            `<span class="stat-bonus">${armorDiff > 0 ? '+' : ''}${armorDiff}</span>` : ''}
                        </span>
                        <div class="stat-tickbar-container">
                            <div class="stat-tickbar stat-tickbar-armor" style="width: ${armorPercent}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        if (hero.shield > 0 || shieldValue > 0) {
            const maxShield = 1600; // Base value for 100% width for Reinhardt's shield
            const effectiveMaxShield = hero.name === "Reinhardt" ? maxShield : 300;
            const shieldPercent = Math.min(100, (shieldValue / effectiveMaxShield) * 100);
            
            statsHTML += `
                <div class="stat-item ${shieldDiff !== 0 ? 'modified' : ''}">
                    <span class="stat-label">Shield:</span>
                    <div class="stat-value-container">
                        <span class="stat-value stat-shield">${shieldValue}${shieldDiff !== 0 ? 
                            `<span class="stat-bonus">${shieldDiff > 0 ? '+' : ''}${shieldDiff}</span>` : ''}
                        </span>
                        <div class="stat-tickbar-container">
                            <div class="stat-tickbar stat-tickbar-shield" style="width: ${shieldPercent}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // Display percentage-based stats
        const displayPercentageStats = [
            { name: 'Weapon Power', styleClass: 'stat-weapon', maxValue: 200 },
            { name: 'Ability Power', styleClass: 'stat-ability', maxValue: 200 },
            { name: 'Attack Speed', styleClass: 'stat-weapon', maxValue: 200 },
            { name: 'Move Speed', styleClass: 'stat-survival', maxValue: 150 },
            { name: 'Cooldown Reduction', styleClass: 'stat-cooldown', maxValue: 50 },
            { name: 'Weapon Lifesteal', styleClass: 'stat-weapon', maxValue: 50 },
            { name: 'Ability Lifesteal', styleClass: 'stat-ability', maxValue: 50 }
        ];
        
        displayPercentageStats.forEach(stat => {
            const baseValue = heroBaseStats[selectedHero][stat.name] || 0;
            const currentValue = currentHeroStats[stat.name] || baseValue;
            const diff = currentValue - baseValue;
            
            if (diff !== 0 || stat.name === 'Weapon Power' || stat.name === 'Ability Power') {
                const statPercent = Math.min(100, (currentValue / stat.maxValue) * 100);
                
                statsHTML += `
                    <div class="stat-item ${diff !== 0 ? 'modified' : ''}">
                        <span class="stat-label">${stat.name}:</span>
                        <div class="stat-value-container">
                            <span class="stat-value ${stat.styleClass}">${currentValue}%${diff !== 0 ? 
                                `<span class="stat-bonus">${diff > 0 ? '+' : ''}${diff}%</span>` : ''}
                            </span>
                            <div class="stat-tickbar-container">
                                <div class="stat-tickbar ${stat.styleClass}-bar" style="width: ${statPercent}%"></div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        
        statsHTML += `</div>`;
        statsContainer.innerHTML = statsHTML;
    }
    
    // Calculate modified ability stats based on current stat values
    function calculateModifiedAbilityStats(ability, currentStats, baseStats) {
        const modifiedStats = [];
        
        ability.stats.forEach(stat => {
            // Default values
            let baseValue = null;
            let modifiedValue = null;
            let modifier = 0;
            let contributors = [];
            let modifierType = null;
            
            // Try to extract numeric values
            const numericMatch = /^(\d+(\.\d+)?)/.exec(stat.value);
            if (numericMatch) {
                baseValue = parseFloat(numericMatch[1]);
                
                // Calculate modifications based on stat type
                if (stat.label.includes("Damage")) {
                    modifierType = "Weapon Power";
                    // Apply weapon power modifier
                    const weaponPowerPercent = currentStats['Weapon Power'] || 100;
                    const weaponPowerModifier = (weaponPowerPercent - 100) / 100;
                    modifier = baseValue * weaponPowerModifier;
                    modifiedValue = baseValue + modifier;
                    
                    // Track item contributions
                    selectedItems.forEach(item => {
                        if (statModifiers[item.id] && statModifiers[item.id]['Weapon Power']) {
                            const contribution = baseValue * (statModifiers[item.id]['Weapon Power'] / 100);
                            contributors.push({
                                name: item.name,
                                value: statModifiers[item.id]['Weapon Power'],
                                contribution: contribution
                            });
                        }
                    });
                } 
                else if (stat.label.includes("Healing")) {
                    modifierType = "Ability Power";
                    // Apply ability power modifier
                    const abilityPowerPercent = currentStats['Ability Power'] || 100;
                    const abilityPowerModifier = (abilityPowerPercent - 100) / 100;
                    modifier = baseValue * abilityPowerModifier;
                    modifiedValue = baseValue + modifier;
                    
                    // Track item contributions
                    selectedItems.forEach(item => {
                        if (statModifiers[item.id] && statModifiers[item.id]['Ability Power']) {
                            const contribution = baseValue * (statModifiers[item.id]['Ability Power'] / 100);
                            contributors.push({
                                name: item.name,
                                value: statModifiers[item.id]['Ability Power'],
                                contribution: contribution
                            });
                        }
                    });
                }
                else if (stat.label.includes("Cooldown")) {
                    modifierType = "Cooldown Reduction";
                    // Apply cooldown reduction modifier
                    const cooldownReductionPercent = currentStats['Cooldown Reduction'] || 0;
                    modifier = -(baseValue * (cooldownReductionPercent / 100));
                    modifiedValue = baseValue + modifier;
                    
                    // Track item contributions
                    selectedItems.forEach(item => {
                        if (statModifiers[item.id] && statModifiers[item.id]['Cooldown Reduction']) {
                            const contribution = -(baseValue * (statModifiers[item.id]['Cooldown Reduction'] / 100));
                            contributors.push({
                                name: item.name,
                                value: statModifiers[item.id]['Cooldown Reduction'],
                                contribution: contribution
                            });
                        }
                    });
                }
            }
            
            // Add the stat to our results
            modifiedStats.push({
                label: stat.label,
                baseValue: baseValue,
                modifiedValue: modifiedValue,
                displayValue: stat.value, // Original display string
                modifier: modifier,
                modifierType: modifierType,
                contributors: contributors
            });
        });
        
        return modifiedStats;
    }
    
    // Generate the HTML for the modified ability stats
    function generateModifiedAbilityHTML(ability, currentStats, baseStats) {
        const modifiedStats = calculateModifiedAbilityStats(ability, currentStats, baseStats);
        
        // Generate HTML for each stat
        let statsHTML = '';
        modifiedStats.forEach(stat => {
            // Skip stats that don't have numeric values or modifications
            if (stat.baseValue === null || stat.modifiedValue === null) {
                statsHTML += `
                    <div class="ability-stat">
                        <label>${stat.label}:</label>
                        <span>${stat.displayValue}</span>
                    </div>
                `;
                return;
            }
            
            // Color-code the stat based on type
            let valueClass = '';
            if (stat.label.includes("Damage")) {
                valueClass = 'stat-damage';
            } else if (stat.label.includes("Healing")) {
                valueClass = 'stat-healing';
            } else if (stat.label.includes("Cooldown")) {
                valueClass = 'stat-cooldown';
            }
            
            // Format the modifier with sign and precision
            const formattedModifier = stat.modifier.toFixed(1);
            const modifierSign = stat.modifier >= 0 ? '+' : '';
            
            // Only show modification if there is one
            if (Math.abs(stat.modifier) > 0.01) {
                // Create HTML for contributors
                let contributorsHTML = '';
                if (stat.contributors.length > 0) {
                    contributorsHTML = `
                        <div class="stat-contributors">
                            <div class="contributors-title">Contributions from:</div>
                            ${stat.contributors.map(contributor => `
                                <div class="contributor">
                                    <span class="contributor-name">${contributor.name}:</span>
                                    <span class="contributor-value">${contributor.value > 0 ? '+' : ''}${contributor.value}%</span>
                                    <span class="contributor-result">(${contributor.contribution > 0 ? '+' : ''}${contributor.contribution.toFixed(1)})</span>
                                </div>
                            `).join('')}
                        </div>
                    `;
                }
                
                statsHTML += `
                    <div class="ability-stat expandable">
                        <label>${stat.label}:</label>
                        <div class="stat-value-container">
                            <span class="base-value ${valueClass}">${stat.baseValue}</span>
                            <span class="modifier ${stat.modifier >= 0 ? 'positive' : 'negative'}">${modifierSign}${formattedModifier}</span>
                            <span class="equals">=</span>
                            <span class="final-value ${valueClass}">${stat.modifiedValue.toFixed(1)}</span>
                            <button class="expand-btn" title="Show details">↓</button>
                            <div class="stat-details">
                                <div class="stat-formula">Base + ${stat.modifierType} (${currentStats[stat.modifierType] - 100}%)</div>
                                ${contributorsHTML}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // No modification, show simple stat
                statsHTML += `
                    <div class="ability-stat">
                        <label>${stat.label}:</label>
                        <span class="${valueClass}">${stat.displayValue}</span>
                    </div>
                `;
            }
        });
        
        return statsHTML;
    }
    
    // Function to update the Overview page 
    function updateOverviewPage() {
        const overviewPage = document.getElementById('overview-page');
        if (!overviewPage) return;
        
        const hero = heroes[selectedHero];
        if (!hero) return;
        
        // Get role-specific CSS class
        let roleBadgeClass = '';
        if (hero.role === 'Tank') {
            roleBadgeClass = 'tank-badge';
        } else if (hero.role === 'Damage') {
            roleBadgeClass = 'damage-badge';
        } else if (hero.role === 'Support') {
            roleBadgeClass = 'support-badge';
        }
        
        // Get hero icon path
        const heroImagePath = getHeroIconPath(hero.name);
        
        // Start building the overview content
        let overviewHTML = `
            <div class="overview-container">
                <div class="hero-profile">
                    <img src="${heroImagePath}" alt="${hero.name}" 
                        onerror="this.src='https://placehold.co/300x400/0088FF/FFFFFF?text=${hero.name}'" />
                    <h2>${hero.name}</h2>
                    <div class="role-badge ${roleBadgeClass}">${hero.role}</div>
                    
                    <!-- Stats Panel -->
                    <div id="hero-stats-panel" class="stats-panel">
                        <h3>Current Stats</h3>
                        <div class="stats-grid">
                            <!-- Stats will be dynamically updated here -->
                        </div>
                    </div>
                </div>
                
                <div class="hero-detail-wrapper">
                    <!-- Hero Abilities Section -->
                    <div class="hero-abilities">
                        <h3 class="section-title">
                            <i class="fas fa-fire"></i> Hero Abilities
                        </h3>
        `;
        
        // Add each ability with icons and modified stats
        hero.abilities.forEach(ability => {
            // Get ability icon
            const abilityIconPath = getAbilityIconPath(hero.name, ability.name);
            
            // Generate modified ability stats HTML
            const statsHTML = generateModifiedAbilityHTML(ability, currentHeroStats, heroBaseStats[selectedHero]);
            
            overviewHTML += `
                <div class="ability">
                    <div class="ability-header">
                        <div class="ability-icon">
                            <img src="${abilityIconPath}" alt="${ability.name}" 
                                onerror="this.parentNode.innerHTML='${ability.name.charAt(0)}'"/>
                        </div>
                        <div class="ability-name">${ability.name}</div>
                    </div>
                    <div class="ability-description">${ability.description}</div>
                    <div class="ability-stats">
                        ${statsHTML}
                    </div>
                </div>
            `;
        });
        
        // Close the hero abilities div and hero detail wrapper
        overviewHTML += `
                    </div>
                </div>
            </div>
        `;
        
        // Update the overview page content
        overviewPage.innerHTML = overviewHTML;
        
        // Update the stats display
        updateStatsDisplay();
        
        // Set up expandable stats
        setupExpandableStats();
    }
    
    // Function to add event listeners to expandable stats
    function setupExpandableStats() {
        document.querySelectorAll('.ability-stat.expandable').forEach(statElement => {
            statElement.addEventListener('click', function() {
                this.classList.toggle('expanded');
                
                // Close other expanded stats
                document.querySelectorAll('.ability-stat.expanded').forEach(stat => {
                    if (stat !== this) {
                        stat.classList.remove('expanded');
                    }
                });
            });
        });
    }
    
    // Function to apply color highlighting to power descriptions
    function colorizePowerDescription(description) {
        if (!description) return '';
        
        let coloredDesc = description;
        
        // Highlight ability names in brackets
        coloredDesc = coloredDesc.replace(/\[([^\]]+)\]/g, '[<span class="stat-ability">$1</span>]');
        
        // Highlight percentage values
        coloredDesc = coloredDesc.replace(/(\d+)%/g, '<span class="stat-cooldown">$1%</span>');
        
        // Highlight time values (seconds)
        coloredDesc = coloredDesc.replace(/(\d+\.?\d*)s/g, '<span class="stat-cooldown">$1s</span>');
        
        // Highlight distance values (meters)
        coloredDesc = coloredDesc.replace(/(\d+\.?\d*)m/g, '<span class="stat-cooldown">$1m</span>');
        
        // Highlight damage values
        coloredDesc = coloredDesc.replace(/(\d+\.?\d*)\s*damage/gi, '<span class="stat-damage">$1</span> damage');
        
        // Highlight healing values
        coloredDesc = coloredDesc.replace(/(\d+\.?\d*)\s*healing/gi, '<span class="stat-healing">$1</span> healing');
        coloredDesc = coloredDesc.replace(/heal\s*(\d+\.?\d*)/gi, 'heal <span class="stat-healing">$1</span>');
        
        return coloredDesc;
    }
    
    // Function to colorize item descriptions
    function colorizeDescription(description) {
        if (!description) return '';
        
        let coloredDesc = description;
        
        // Color Health values
        coloredDesc = coloredDesc.replace(/\+(\d+)\s*Health/g, '+<span class="stat-health">$1</span> Health');
        
        // Color Armor values
        coloredDesc = coloredDesc.replace(/\+(\d+)\s*Armor/g, '+<span class="stat-armor">$1</span> Armor');
        
        // Color Shield values
        coloredDesc = coloredDesc.replace(/\+(\d+)\s*Shield/g, '+<span class="stat-shield">$1</span> Shield');
        
        // Color Weapon Power values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Weapon Power/g, '+<span class="stat-weapon">$1%</span> Weapon Power');
        
        // Color Ability Power values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Ability Power/g, '+<span class="stat-ability">$1%</span> Ability Power');
        
        // Color Attack Speed values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Attack Speed/g, '+<span class="stat-weapon">$1%</span> Attack Speed');
        
        // Color Move Speed values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Move Speed/g, '+<span class="stat-survival">$1%</span> Move Speed');
        
        // Color Cooldown Reduction values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Cooldown Reduction/g, '+<span class="stat-cooldown">$1%</span> Cooldown Reduction');
        
        // Color Lifesteal values
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Lifesteal/g, '+<span class="stat-health">$1%</span> Lifesteal');
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Weapon Lifesteal/g, '+<span class="stat-weapon">$1%</span> Weapon Lifesteal');
        coloredDesc = coloredDesc.replace(/\+(\d+)%\s*Ability Lifesteal/g, '+<span class="stat-ability">$1%</span> Ability Lifesteal');
        
        // Color specific ability names (within brackets like [Rocket Hammer])
        coloredDesc = coloredDesc.replace(/\[([^\]]+)\]/g, '[<span class="stat-ability">$1</span>]');
        
        return coloredDesc;
    }
    
    // Create the item card with PNG image and error handling
    function createItemCard(item, category, isUniversal = false) {
        const itemId = isUniversal ? 'universal-' + item.name.toLowerCase().replace(/\s/g, '-') : item.name.toLowerCase().replace(/\s/g, '-');
        const iconFileName = getIconFileName(item.name);
        
        // Create colored description
        let coloredDescription = colorizeDescription(item.description);
        
        return `
            <div class="item-card" data-item="${itemId}" data-cost="${item.cost}" data-category="${category}" data-name="${item.name}" data-description="${encodeURIComponent(item.description)}">
                <div class="item-header">
                    <div class="item-icon">
                        <img src="images/icons/${iconFileName}" alt="${item.name}" onerror="handleImageError(this)" />
                    </div>
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-cost">${item.cost}</div>
                    </div>
                </div>
                <div class="item-description">${coloredDescription}</div>
            </div>
        `;
    }
    
    // Create power card with PNG image and error handling
    function createPowerCard(power) {
        const powerId = power.name.toLowerCase().replace(/\s/g, '-');
        const iconFileName = getPowerIconFileName(power.name);
        
        // Create colored description
        let coloredDescription = colorizePowerDescription(power.description);
        
        return `
            <div class="power-card" data-power="${powerId}" data-name="${power.name}">
                <div class="power-header">
                    <div class="power-icon">
                        <img src="images/icons/${iconFileName}" alt="${power.name}" onerror="handleImageError(this)" />
                    </div>
                    <div class="power-name">${power.name}</div>
                </div>
                <div class="power-description">${coloredDescription}</div>
            </div>
        `;
    }
    
    // Display hero details
    function displayHeroDetails(heroId) {
        selectedHero = heroId;
        selectedPowers = [];
        selectedItems = [];
        
        const hero = heroes[heroId];
        if (!hero) return;
        
        // Reset stats
        resetStats();
        
        // Show hero builder container
        heroInfo.style.display = 'none';
        heroBuilder.style.display = 'block';
        
        // Generate Powers Page
        let powersHTML = `
            <h2 class="page-title">Powers Selection</h2>
            <p class="section-description">Powers are transformative modifiers that grant unique passives or entirely new abilities. Select up to 4 powers for your build.</p>
            <div class="powers-grid">
        `;
        
        hero.powers.forEach(power => {
            powersHTML += createPowerCard(power);
        });
        
        powersHTML += '</div>';
        powersPage.innerHTML = powersHTML;
        
        // Generate Hero Items Page
        let heroItemsHTML = `
            <h2 class="page-title">Hero-Specific Items</h2>
            <p class="section-description">Items designed specifically for ${hero.name}. Select up to 6 items total for your build.</p>
        `;
        
        ['weapon', 'ability', 'survival'].forEach(category => {
            const categoryTitleClass = `category-title-${category}`;
            heroItemsHTML += `
                <div class="item-category item-category-${category}">
                    <div class="category-title ${categoryTitleClass}">${category.charAt(0).toUpperCase() + category.slice(1)} Items</div>
                    <div class="items-grid">
            `;
            
            hero.items[category].forEach(item => {
                heroItemsHTML += createItemCard(item, category);
            });
            
            heroItemsHTML += `
                    </div>
                </div>
            `;
        });
        
        heroItemsPage.innerHTML = heroItemsHTML;
        
        // Generate Universal Items Page
        let universalItemsHTML = `
            <h2 class="page-title">Universal Items</h2>
            <p class="section-description">Items available to all heroes. Select up to 6 items total for your build.</p>
        `;
        
        ['weapon', 'ability', 'survival'].forEach(category => {
            const categoryTitleClass = `category-title-${category}`;
            universalItemsHTML += `
                <div class="item-category item-category-${category}">
                    <div class="category-title ${categoryTitleClass}">Universal ${category.charAt(0).toUpperCase() + category.slice(1)} Items</div>
                    <div class="items-grid">
            `;
            
            universalItems[category].forEach(item => {
                universalItemsHTML += createItemCard(item, category, true);
            });
            
            universalItemsHTML += `
                    </div>
                </div>
            `;
        });
        
        universalItemsPage.innerHTML = universalItemsHTML;
        
        // Generate Overview Page (this will populate with combined hero details and abilities)
        updateOverviewPage();
        
        // Setup event listeners for tabs, items and powers
        setupTabNavigation();
        setupSelectionListeners();
        
        // Initialize the stats display
        updateStatsDisplay();
        
        // Set up image error handlers
        setupImageErrorHandlers();
        
        // Setup build management functionality
        setupBuildManagement();
        
        // Trigger an event to notify that a hero has been selected
        document.dispatchEvent(new CustomEvent('heroSelected', { detail: { heroId: heroId } }));
    }
    
    // Set up selection listeners for powers and items
    function setupSelectionListeners() {
        // Power selection
        const powerCards = document.querySelectorAll('.power-card');
        powerCards.forEach(card => {
            card.addEventListener('click', () => {
                const powerId = card.dataset.power;
                const powerName = card.dataset.name;
                
                if (card.classList.contains('selected')) {
                    // Deselect
                    card.classList.remove('selected');
                    selectedPowers = selectedPowers.filter(power => power.id !== powerId);
                } else {
                    // Select if we haven't reached the limit
                    if (selectedPowers.length < 4) {
                        card.classList.add('selected');
                        selectedPowers.push({
                            id: powerId,
                            name: powerName
                        });
                    } else {
                        alert('You can only select up to 4 Powers.');
                    }
                }
                
                updateSelectionSummary();
            });
        });
        
        // Item selection
        const itemCards = document.querySelectorAll('.item-card');
        itemCards.forEach(card => {
            card.addEventListener('click', () => {
                const itemId = card.dataset.item;
                const itemName = card.dataset.name;
                const itemCost = parseInt(card.dataset.cost);
                const itemCategory = card.dataset.category;
                const itemDescription = decodeURIComponent(card.dataset.description || '');
                
                if (card.classList.contains('selected')) {
                    // Deselect
                    card.classList.remove('selected');
                    selectedItems = selectedItems.filter(item => item.id !== itemId);
                } else {
                    // Select if we haven't reached the limit
                    if (selectedItems.length < 6) {
                        card.classList.add('selected');
                        selectedItems.push({
                            id: itemId,
                            name: itemName,
                            cost: itemCost,
                            category: itemCategory,
                            description: itemDescription
                        });
                    } else {
                        alert('You can only select up to 6 Items.');
                    }
                }
                
                updateSelectionSummary();
                // Trigger stats update
                updateStatsFromItems();
            });
        });
        
        // Share build button
        shareBtn.addEventListener('click', shareBuild);
    }
    
    // Update selection summary
    function updateSelectionSummary() {
        const powersCounter = document.getElementById('powers-counter');
        const itemsCounter = document.getElementById('items-counter');
        const totalCostDisplay = document.getElementById('total-cost');
        const selectedPowersList = document.getElementById('selected-powers-list');
        const selectedItemsList = document.getElementById('selected-items-list');
        
        // Update counters
        powersCounter.textContent = selectedPowers.length;
        itemsCounter.textContent = selectedItems.length;
        
        // Calculate total cost
        const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
        totalCostDisplay.textContent = totalCost;
        
        // Update selected powers list with icons
        if (selectedPowers.length === 0) {
            selectedPowersList.innerHTML = '<div class="empty-selection">No powers selected yet</div>';
        } else {
            selectedPowersList.innerHTML = '';
            selectedPowers.forEach(power => {
                const iconFileName = getPowerIconFileName(power.name);
                const powerElement = document.createElement('div');
                powerElement.className = 'summary-item';
                powerElement.dataset.id = power.id;
                powerElement.innerHTML = `
                    <div class="summary-item-icon">
                        <img src="images/icons/${iconFileName}" alt="${power.name}" onerror="handleImageError(this)" />
                    </div>
                    ${power.name}
                    <span class="remove-btn" data-remove-power="${power.id}">✕</span>
                `;
                selectedPowersList.appendChild(powerElement);
            });
            
            // Add remove event listeners
            document.querySelectorAll('[data-remove-power]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const powerId = btn.dataset.removePower;
                    removePower(powerId);
                });
            });
        }
        
        // Update selected items list with icons
        if (selectedItems.length === 0) {
            selectedItemsList.innerHTML = '<div class="empty-selection">No items selected yet</div>';
        } else {
            selectedItemsList.innerHTML = '';
            selectedItems.forEach(item => {
                const iconFileName = getIconFileName(item.name);
                const itemElement = document.createElement('div');
                itemElement.className = 'summary-item';
                itemElement.dataset.id = item.id;
                itemElement.innerHTML = `
                    <div class="summary-item-icon">
                        <img src="images/icons/${iconFileName}" alt="${item.name}" onerror="handleImageError(this)" />
                    </div>
                    ${item.name} (<span class="item-cost">${item.cost}</span>)
                    <span class="remove-btn" data-remove-item="${item.id}">✕</span>
                `;
                selectedItemsList.appendChild(itemElement);
            });
            
            // Add remove event listeners
            document.querySelectorAll('[data-remove-item]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const itemId = btn.dataset.removeItem;
                    removeItem(itemId);
                });
            });
        }
        
        // Set up image error handlers for new images
        setupImageErrorHandlers();
    }
    
    // Remove power
    function removePower(powerId) {
        selectedPowers = selectedPowers.filter(power => power.id !== powerId);
        
        // Unselect the power card
        const powerCard = document.querySelector(`.power-card[data-power="${powerId}"]`);
        if (powerCard) {
            powerCard.classList.remove('selected');
        }
        
        updateSelectionSummary();
    }
    
    // Remove item
    function removeItem(itemId) {
        selectedItems = selectedItems.filter(item => item.id !== itemId);
        
        // Unselect the item card
        const itemCard = document.querySelector(`.item-card[data-item="${itemId}"]`);
        if (itemCard) {
            itemCard.classList.remove('selected');
        }
        
        updateSelectionSummary();
        updateStatsFromItems();
    }

    // Function to show toast notification
    // Update showToast function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    // Set message and type
    toastMessage.textContent = message;
    toast.className = 'toast'; // Reset classes
    toast.classList.add(`toast-${type}`);
    
    // Update icon
    const icon = toast.querySelector('i');
    if (icon) {
        if (type === 'success') {
            icon.className = 'fas fa-check-circle';
        } else if (type === 'error') {
            icon.className = 'fas fa-exclamation-circle';
        } else if (type === 'info') {
            icon.className = 'fas fa-info-circle';
        }
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
    
    // Function to save current build
    function saveCurrentBuild() {
        if (!selectedHero || (selectedPowers.length === 0 && selectedItems.length === 0)) {
            showToast('Please select a hero and at least one Power or Item to save a build.', 'error');
            return;
        }
        
        // Prompt for build name
        const buildName = prompt('Enter a name for your build:', `${heroes[selectedHero].name} Build`);
        
        if (!buildName) return; // User cancelled
        
        // Create build object
        const build = {
            id: Date.now().toString(),
            name: buildName,
            hero: selectedHero,
            powers: selectedPowers,
            items: selectedItems,
            stats: { ...currentHeroStats },
            date: new Date().toISOString()
        };
        
        // Get existing builds from localStorage
        let savedBuilds = JSON.parse(localStorage.getItem('stadiumBuilds') || '[]');
        
        // Add new build
        savedBuilds.push(build);
        postBuildToDiscord(build);
        // Save back to localStorage
        localStorage.setItem('stadiumBuilds', JSON.stringify(savedBuilds));
        
        // Show success message
        showToast(`Build "${buildName}" saved successfully!`);
        
        // Update saved builds panel if open
        if (document.getElementById('saved-builds-panel').style.display === 'block') {
            loadSavedBuilds();
        }
    }
    
    // Function to load saved builds
    function loadSavedBuilds() {
        const savedBuildsList = document.getElementById('saved-builds-list');
        const savedBuildsPanel = document.getElementById('saved-builds-panel');
        
        // Get saved builds from localStorage
        const savedBuilds = JSON.parse(localStorage.getItem('stadiumBuilds') || '[]');
        
        // Clear existing list
        savedBuildsList.innerHTML = '';
        
        if (savedBuilds.length === 0) {
            savedBuildsList.innerHTML = '<div class="empty-selection">No saved builds yet</div>';
            return;
        }
        
        // Sort builds by date (newest first)
        savedBuilds.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Add each build to the list
        savedBuilds.forEach(build => {
            const hero = heroes[build.hero];
            if (!hero) return; // Skip if hero not found
            
            // Get role-specific class
            let roleClass = '';
            if (hero.role === 'Tank') {
                roleClass = 'tank-badge';
            } else if (hero.role === 'Damage') {
                roleClass = 'damage-badge';
            } else if (hero.role === 'Support') {
                roleClass = 'support-badge';
            }
            
            // Calculate total cost
            const totalCost = build.items.reduce((total, item) => total + item.cost, 0);
            
            // Create build element
            const buildElement = document.createElement('div');
            buildElement.className = 'saved-build-item';
            buildElement.dataset.buildId = build.id;
            
            buildElement.innerHTML = `
                <div class="saved-build-header">
                    <div class="saved-build-hero">
                        <div class="saved-build-hero-icon">
                            <img src="${getHeroIconPath(hero.name)}" alt="${hero.name}" 
                                onerror="this.src='https://placehold.co/32x32/0088FF/FFFFFF?text=${hero.name.charAt(0)}'" />
                        </div>
                        <div>
                            <div class="saved-build-name">${build.name}</div>
                            <div class="saved-build-role">${hero.role}</div>
                        </div>
                    </div>
                    <div class="saved-build-actions">
                        <button class="saved-build-delete" title="Delete build" data-build-id="${build.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="saved-build-load" title="Load build" data-build-id="${build.id}">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
                <div class="saved-build-stats">
                    <div class="saved-build-stat">
                        <i class="fas fa-bolt"></i> ${build.powers.length}
                    </div>
                    <div class="saved-build-stat">
                        <i class="fas fa-shopping-cart"></i> ${build.items.length}
                    </div>
                </div>
                <div class="saved-build-cost">
                    Total: <span class="item-cost">${totalCost}</span>
                </div>
            `;
            
            savedBuildsList.appendChild(buildElement);
        });
        
        // Add event listeners
        document.querySelectorAll('.saved-build-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const buildId = btn.dataset.buildId;
                deleteSavedBuild(buildId);
            });
        });
        
        document.querySelectorAll('.saved-build-load').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const buildId = btn.dataset.buildId;
                loadBuild(buildId);
            });
        });
        
        // Make entire item clickable to load build
        document.querySelectorAll('.saved-build-item').forEach(item => {
            item.addEventListener('click', () => {
                const buildId = item.dataset.buildId;
                loadBuild(buildId);
            });
        });
        
        // Show the panel
        savedBuildsPanel.style.display = 'block';
    }
    
    // Function to delete a saved build
    function deleteSavedBuild(buildId) {
        // Confirm deletion
        if (!confirm('Are you sure you want to delete this build?')) {
            return;
        }
        
        // Get saved builds
        let savedBuilds = JSON.parse(localStorage.getItem('stadiumBuilds') || '[]');
        
        // Find build name before removing
        const buildToDelete = savedBuilds.find(build => build.id === buildId);
        const buildName = buildToDelete ? buildToDelete.name : 'Build';
        
        // Remove build
        savedBuilds = savedBuilds.filter(build => build.id !== buildId);
        
        // Save back to localStorage
        localStorage.setItem('stadiumBuilds', JSON.stringify(savedBuilds));
        
        // Show success message
        showToast(`"${buildName}" deleted successfully!`);
        
        // Reload the list
        loadSavedBuilds();
    }
    
    // Function to load a build
    function loadBuild(buildId) {
        // Get saved builds
        const savedBuilds = JSON.parse(localStorage.getItem('stadiumBuilds') || '[]');
        
        // Find the build
        const build = savedBuilds.find(build => build.id === buildId);
        
        if (!build) {
            showToast('Build not found!', 'error');
            return;
        }
        
        // Reset current selections
        selectedPowers = [];
        selectedItems = [];
        
        // Select the hero
        document.querySelectorAll('.hero-card').forEach(card => {
            if (card.dataset.hero === build.hero) {
                card.click();
            }
        });
        
        // Need to wait a bit for hero data to load
        setTimeout(() => {
            // Select powers
            build.powers.forEach(power => {
                const powerCard = document.querySelector(`.power-card[data-power="${power.id}"]`);
                if (powerCard && !powerCard.classList.contains('selected')) {
                    powerCard.click();
                }
            });
            
            // Select items
            build.items.forEach(item => {
                const itemCard = document.querySelector(`.item-card[data-item="${item.id}"]`);
                if (itemCard && !itemCard.classList.contains('selected')) {
                    itemCard.click();
                }
            });
            
            // Show success message
            showToast(`Build "${build.name}" loaded successfully!`);
            
            // Hide saved builds panel
            document.getElementById('saved-builds-panel').style.display = 'none';
        }, 100);
    }
    
    // Function to export build as text
    function exportBuildAsText() {
        if (!selectedHero || (selectedPowers.length === 0 && selectedItems.length === 0)) {
            showToast('Please select a hero and at least one Power or Item to share a build.', 'error');
            return null;
        }
        
        const hero = heroes[selectedHero];
        
        // Calculate total cost
        const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
        
        // Create JSON representation of build
        const buildData = {
            version: '1.0',
            hero: selectedHero,
            powers: selectedPowers,
            items: selectedItems
        };
        
        // Encode as base64 to make it more compact
        const buildCode = btoa(JSON.stringify(buildData));
        
        // Create human-readable summary
        let buildText = `STADITECH BUILDER - ${hero.name} Build\n`;
        buildText += `========================================\n`;
        buildText += `Hero: ${hero.name} (${hero.role})\n`;
        buildText += `Total Cost: ${totalCost} Stadium Cash\n\n`;
        
        if (selectedPowers.length > 0) {
            buildText += `POWERS:\n`;
            selectedPowers.forEach(power => {
                buildText += `- ${power.name}\n`;
            });
            buildText += `\n`;
        }
        
        if (selectedItems.length > 0) {
            buildText += `ITEMS:\n`;
            selectedItems.forEach(item => {
                buildText += `- ${item.name} (${item.cost})\n`;
            });
            buildText += `\n`;
        }
        
        buildText += `========================================\n`;
        buildText += `Import code: ${buildCode}\n`;
        buildText += `Created with Staditech Builder`;
        
        return buildText;
    }
    
    // Function to share build
    function shareBuild() {
        if (!selectedHero) {
            showToast('Please select a hero first.', 'error');
            return;
        }
        
        if (selectedPowers.length === 0 && selectedItems.length === 0) {
            showToast('Please select at least one Power or Item for your build.', 'error');
            return;
        }
        
        const hero = heroes[selectedHero];
        
        // Calculate total cost
        const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
        
        // Get role-specific class
        let roleClass = '';
        if (hero.role === 'Tank') {
            roleClass = 'build-tank';
        } else if (hero.role === 'Damage') {
            roleClass = 'build-damage';
        } else if (hero.role === 'Support') {
            roleClass = 'build-support';
        }
        
        // Export as text for copying
        const buildText = exportBuildAsText();
        if (!buildText) return;
        
        // Update the hidden textarea for copying
        const buildCodeText = document.getElementById('build-code-text');
        buildCodeText.value = buildText;
        
        // Hero image path
        const heroImagePath = getHeroIconPath(hero.name);
        
        // Create enhanced build code HTML
        let buildCodeHTML = `
            <div class="build-header">
                <div class="build-hero-icon">
                    <img src="${heroImagePath}" alt="${hero.name}" 
                        onerror="this.src='https://placehold.co/64x64/0088FF/FFFFFF?text=${hero.name.charAt(0)}'" />
                </div>
                <div class="build-hero-info">
                    <h3>${hero.name} Stadium Build</h3>
                    <div class="build-hero-role ${roleClass}">${hero.role}</div>
                </div>
            </div>
            
            <div class="build-stats-grid">
        `;
        
        // Display health, armor, shield stats
        const healthValue = currentHeroStats['Health'] || hero.health;
        const armorValue = currentHeroStats['Armor'] || hero.armor;
        const shieldValue = currentHeroStats['Shield'] || hero.shield;
        
        const healthDiff = healthValue - hero.health;
        const armorDiff = armorValue - hero.armor;
        const shieldDiff = shieldValue - hero.shield;
        
        buildCodeHTML += `
            <div class="build-stat-item">
                <span class="stat-label">Health:</span>
                <span class="stat-value stat-health">${healthValue}${healthDiff !== 0 ? 
                    `<span class="stat-bonus">(${healthDiff > 0 ? '+' : ''}${healthDiff})</span>` : ''}
                </span>
            </div>
        `;
        
        if (hero.armor > 0 || armorValue > 0) {
            buildCodeHTML += `
                <div class="build-stat-item">
                    <span class="stat-label">Armor:</span>
                    <span class="stat-value stat-armor">${armorValue}${armorDiff !== 0 ? 
                        `<span class="stat-bonus">(${armorDiff > 0 ? '+' : ''}${armorDiff})</span>` : ''}
                    </span>
                </div>
            `;
        }
        
        if (hero.shield > 0 || shieldValue > 0) {
            buildCodeHTML += `
                <div class="build-stat-item">
                    <span class="stat-label">Shield:</span>
                    <span class="stat-value stat-shield">${shieldValue}${shieldDiff !== 0 ? 
                        `<span class="stat-bonus">(${shieldDiff > 0 ? '+' : ''}${shieldDiff})</span>` : ''}
                    </span>
                </div>
            `;
        }
        
        // Display percentage-based stats that have been modified
        const displayPercentageStats = [
            { name: 'Weapon Power', styleClass: 'stat-weapon' },
            { name: 'Ability Power', styleClass: 'stat-ability' },
            { name: 'Attack Speed', styleClass: 'stat-weapon' },
            { name: 'Move Speed', styleClass: 'stat-survival' },
            { name: 'Cooldown Reduction', styleClass: 'stat-cooldown' },
            { name: 'Weapon Lifesteal', styleClass: 'stat-weapon' },
            { name: 'Ability Lifesteal', styleClass: 'stat-ability' }
        ];
                // Generate build URL for sharing
        const buildData = {
            hero: selectedHero,
            powers: selectedPowers.map(p => p.id),
            items: selectedItems.map(i => i.id)
        };
        const encodedData = btoa(JSON.stringify(buildData));
        const shareURL = `${window.location.origin}${window.location.pathname}?build=${encodedData}`;
        
        postToDiscord(shareURL);
        
        displayPercentageStats.forEach(stat => {
            const baseValue = heroBaseStats[selectedHero][stat.name] || 0;
            const currentValue = currentHeroStats[stat.name] || baseValue;
            const diff = currentValue - baseValue;
            
            if (diff !== 0) {
                buildCodeHTML += `
                    <div class="build-stat-item">
                        <span class="stat-label">${stat.name}:</span>
                        <span class="stat-value ${stat.styleClass}">${currentValue}%
                            <span class="stat-bonus">(${diff > 0 ? '+' : ''}${diff}%)</span>
                        </span>
                    </div>
                `;
            }
        });
        
        buildCodeHTML += `</div>`;
        
        // Add selections section
        buildCodeHTML += `<div class="build-selections">`;
        
        // Powers section
        if (selectedPowers.length > 0) {
            buildCodeHTML += `
                <div class="build-section">
                    <h4>Powers</h4>
                    <div class="build-powers-list">
            `;
            
            selectedPowers.forEach(power => {
                const iconFileName = getPowerIconFileName(power.name);
                buildCodeHTML += `
                    <div class="build-power-item">
                        <div class="summary-item-icon">
                            <img src="images/icons/${iconFileName}" alt="${power.name}" onerror="handleImageError(this)" />
                        </div>
                        <span>${power.name}</span>
                    </div>
                `;
            });
            
            buildCodeHTML += `
                    </div>
                </div>
            `;
        }
        
        // Items section
        if (selectedItems.length > 0) {
            buildCodeHTML += `
                <div class="build-section">
                    <h4>Items</h4>
                    <div class="build-items-list">
            `;
            
            selectedItems.forEach(item => {
                const iconFileName = getIconFileName(item.name);
                buildCodeHTML += `
                    <div class="build-item-item">
                        <div class="summary-item-icon">
                            <img src="images/icons/${iconFileName}" alt="${item.name}" onerror="handleImageError(this)" />
                        </div>
                        <span>${item.name}</span>
                        <span class="item-cost">${item.cost}</span>
                    </div>
                `;
            });
            
            buildCodeHTML += `
                    </div>
                </div>
            `;
        }
        
        buildCodeHTML += `</div>`;
        
        buildCodeHTML += `
        <div class="build-footer">
            <div class="build-total-cost">
                Total Cost: <span class="item-cost">${totalCost}</span> Stadium Cash
            </div>
            <div class="build-buttons">
                <button class="copy-build-btn" id="copy-build-btn">
                    <i class="fas fa-copy"></i> Copy Build Text
                </button>
                <button class="share-url-btn" id="share-url-btn">
                    <i class="fas fa-link"></i> Share URL
                </button>
                <button class="save-build-btn" id="save-build-btn">
                    <i class="fas fa-save"></i> Save Build
                </button>
            </div>
        </div>
    `;
    
    // Update the build code display
    const buildCodeDisplay = document.getElementById('build-code');
    buildCodeDisplay.innerHTML = buildCodeHTML;
    buildCodeDisplay.style.display = 'block';
    
    // Add event listeners to the new buttons
    document.getElementById('copy-build-btn').addEventListener('click', copyBuildToClipboard);
    document.getElementById('save-build-btn').addEventListener('click', saveCurrentBuild);
    document.getElementById('share-url-btn').addEventListener('click', shareBuildViaURL);
    
    // Set up image error handlers for new images
    setupImageErrorHandlers();
    
    // Scroll to build code
    buildCodeDisplay.scrollIntoView({ behavior: 'smooth' });
}
    // Function to copy build to clipboard
    function copyBuildToClipboard() {
        const buildCodeText = document.getElementById('build-code-text');
        
        // Select the text
        buildCodeText.select();
        buildCodeText.setSelectionRange(0, 99999); // For mobile devices
        
        // Copy to clipboard
        navigator.clipboard.writeText(buildCodeText.value)
            .then(() => {
                showToast('Build copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy build: ', err);
                showToast('Failed to copy build.', 'error');
            });
    }
    
    // Function to import build from text
    function importBuild() {
        const importText = document.getElementById('import-textarea').value.trim();
        
        if (!importText) {
            showToast('Please enter a build code to import.', 'error');
            return;
        }
        
        try {
            // Find the import code in the text
            const codeRegex = /Import code: ([A-Za-z0-9+/=]+)/;
            const codeMatch = importText.match(codeRegex);
            
            let buildCode;
            if (codeMatch && codeMatch[1]) {
                // Code found in formatted text
                buildCode = codeMatch[1];
            } else {
                // Try to use the whole text as a code
                buildCode = importText;
            }
            
            // Decode the build
            const buildData = JSON.parse(atob(buildCode));
            
            // Verify version and required fields
            if (!buildData.version || !buildData.hero || !buildData.powers || !buildData.items) {
                throw new Error('Invalid build format');
            }
            
            // Reset current selections
            selectedPowers = [];
            selectedItems = [];
            
            // Select the hero
            document.querySelectorAll('.hero-card').forEach(card => {
                if (card.dataset.hero === buildData.hero) {
                    card.click();
                }
            });
            
            // Need to wait a bit for hero data to load
            setTimeout(() => {
                // Select powers
                buildData.powers.forEach(power => {
                    const powerCard = document.querySelector(`.power-card[data-power="${power.id}"]`);
                    if (powerCard && !powerCard.classList.contains('selected')) {
                        powerCard.click();
                    }
                });
                
                // Select items
                buildData.items.forEach(item => {
                    const itemCard = document.querySelector(`.item-card[data-item="${item.id}"]`);
                    if (itemCard && !itemCard.classList.contains('selected')) {
                        itemCard.click();
                    }
                });
                
                // Show success message
                showToast('Build imported successfully!');
                
                // Close import modal
                document.getElementById('import-modal').style.display = 'none';
                
                // Clear textarea
                document.getElementById('import-textarea').value = '';
            }, 100);
        } catch (error) {
            console.error('Failed to import build: ', error);
            showToast('Failed to import build. Invalid code format.', 'error');
        }
    }
    
    // Setup event listeners for build management
    function setupBuildManagement() {
        // Save current build
        document.getElementById('save-current-build').addEventListener('click', saveCurrentBuild);
        
        // Show saved builds dropdown
        document.getElementById('show-saved-builds-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent clicking from bubbling to document
            const panel = document.getElementById('saved-builds-panel');
            panel.classList.toggle('active');
            
            if (panel.classList.contains('active')) {
                loadSavedBuilds();
                
                // Close when clicking outside the panel
                document.addEventListener('click', function closePanel(e) {
                    if (!panel.contains(e.target) && e.target !== document.getElementById('show-saved-builds-btn')) {
                        panel.classList.remove('active');
                        document.removeEventListener('click', closePanel);
                    }
                });
            }
        });
        
        // Close saved builds panel with close button
        document.getElementById('close-saved-builds').addEventListener('click', () => {
            document.getElementById('saved-builds-panel').classList.remove('active');
        });
        
        // Import build button
        document.getElementById('import-build-btn').addEventListener('click', () => {
            document.getElementById('import-modal').style.display = 'flex';
        });
        
        // Close import modal
        document.getElementById('close-import-modal').addEventListener('click', () => {
            document.getElementById('import-modal').style.display = 'none';
        });
        
        // Import build
        document.getElementById('import-build').addEventListener('click', importBuild);
    }
    function safeBase64Encode(obj) {
        // Convert the object to a JSON string
        const jsonString = JSON.stringify(obj);
        
        // Use encodeURIComponent to handle non-Latin1 characters
        return btoa(encodeURIComponent(jsonString));
      }
    // Add this to your existing shareBuild function
    function shareBuildViaURL() {
        // Create minimal build object
  const buildData = {
    hero: selectedHero,
    powers: selectedPowers.map(p => p.id),
    items: selectedItems.map(i => i.id)
  };
 
  
  
  // Use the safe encoding function
  const encodedData = safeBase64Encode(buildData);
  
  // Create shareable URL
  const shareURL = `${window.location.origin}${window.location.pathname}?build=${encodedData}`;
        
        // Create and open URL share dialog
        const dialog = document.createElement('div');
        dialog.className = 'url-share-dialog';
        dialog.innerHTML = `
            <div class="url-share-content">
                <div class="url-share-header">
                    <h3>Share Your Build</h3>
                    <button class="close-dialog">×</button>
                </div>
                <p>Share this link with others to let them view your build:</p>
                <div class="url-input-container">
                    <input type="text" value="${shareURL}" readonly class="url-input">
                    <button class="copy-url-btn">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(dialog);
        
        // Select the URL input for easy copying
        const urlInput = dialog.querySelector('.url-input');
        urlInput.select();
        
        // Add event listeners for the dialog
        dialog.querySelector('.close-dialog').addEventListener('click', () => {
            document.body.removeChild(dialog);
        });
        
        dialog.querySelector('.copy-url-btn').addEventListener('click', () => {
            urlInput.select();
            document.execCommand('copy');
            showToast('URL copied to clipboard!');
        });
        
        // Close when clicking outside the dialog content
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                document.body.removeChild(dialog);
            }
        });
        
        // Prevent the dialog from closing when clicking inside the content
        dialog.querySelector('.url-share-content').addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    function loadBuildFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const buildParam = urlParams.get('build');
        
        if (buildParam) {
            try {
                const buildData = safeBase64Decode(buildParam);
                
                // Need to make sure DOM is fully loaded before working with it
                setTimeout(() => {
                    // Select the hero
                    const heroCard = document.querySelector(`.hero-card[data-hero="${buildData.hero}"]`);
                    if (heroCard) {
                        heroCard.click();
                        
                        // Need to wait for hero data to load
                        setTimeout(() => {
                            // Select powers
                            if (buildData.powers && Array.isArray(buildData.powers)) {
                                buildData.powers.forEach(powerId => {
                                    const powerCard = document.querySelector(`.power-card[data-power="${powerId}"]`);
                                    if (powerCard && !powerCard.classList.contains('selected')) {
                                        powerCard.click();
                                    }
                                });
                            }
                            
                            // Select items
                            if (buildData.items && Array.isArray(buildData.items)) {
                                buildData.items.forEach(itemId => {
                                    const itemCard = document.querySelector(`.item-card[data-item="${itemId}"]`);
                                    if (itemCard && !itemCard.classList.contains('selected')) {
                                        itemCard.click();
                                    }
                                });
                            }
                            
                            showToast('Build loaded from URL successfully!');
                            
                            // Switch to overview tab
                            document.querySelector('.tab-button[data-tab="overview"]').click();
                        }, 300); // Wait a bit for hero data to load
                    } else {
                        showToast('Failed to load hero from URL', 'error');
                    }
                }, 100); // Wait for DOM to be ready
            } catch (error) {
                console.error('Failed to load build from URL:', error);
                showToast('Failed to load build from URL', 'error');
            }
        }
    }
    
    // Generate hero cards
    function generateHeroCards() {
        for (const heroId in heroes) {
            const hero = heroes[heroId];
            
            const heroCard = document.createElement('div');
            heroCard.className = 'hero-card';
            heroCard.dataset.hero = heroId;
            
            // Choose a color based on hero role for fallback
            let roleColor = '#0088FF'; // Default blue
            if (hero.role === 'Tank') {
                roleColor = '#FFAA00'; // Yellow/orange for tanks
            } else if (hero.role === 'Damage') {
                roleColor = '#FF5C5C'; // Red for damage
            } else if (hero.role === 'Support') {
                roleColor = '#40FF9C'; // Green for support
            }
            
            // Use the hero image path
            const heroImagePath = getHeroIconPath(hero.name);
            
            heroCard.innerHTML = `
                <img src="${heroImagePath}" alt="${hero.name}" onerror="this.src='https://placehold.co/100x100/${roleColor.replace('#', '')}/FFFFFF?text=${hero.name.charAt(0)}'" />
                <h3>${hero.name}</h3>
                <div class="role">${hero.role}</div>
            `;
            
            heroCard.addEventListener('click', () => {
                document.querySelectorAll('.hero-card').forEach(card => card.classList.remove('active'));
                heroCard.classList.add('active');
                displayHeroDetails(heroId);
            });
            
            heroSelector.appendChild(heroCard);
        }
    }
    function setupShareFeatures() {
        // Create the share popup
        const sharePopup = document.createElement('div');
        sharePopup.className = 'share-popup';
        sharePopup.id = 'share-popup';
        
        sharePopup.innerHTML = `
            <div class="share-popup-content">
                <div class="share-popup-header">
                    <h2>Share Your Build</h2>
                    <button class="close-popup" id="close-share-popup">×</button>
                </div>
                <div class="share-methods" id="share-methods">
                    <!-- Share methods will be added dynamically -->
                </div>
            </div>
        `;
        
        document.body.appendChild(sharePopup);
        
        // Setup floating share button
        const floatingShareBtn = document.getElementById('floating-share-btn');
        if (floatingShareBtn) {
            floatingShareBtn.addEventListener('click', openSharePopup);
        }
        
        // Setup close button
        document.getElementById('close-share-popup').addEventListener('click', () => {
            sharePopup.classList.remove('active');
        });
        
        // Close when clicking outside the content
        sharePopup.addEventListener('click', (e) => {
            if (e.target === sharePopup) {
                sharePopup.classList.remove('active');
            }
        });
    }
    
    // Open share popup and populate with share methods
    function openSharePopup() {
        if (!selectedHero) {
            showToast('Please select a hero first.', 'error');
            return;
        }
        
        if (selectedPowers.length === 0 && selectedItems.length === 0) {
            showToast('Please select at least one Power or Item for your build.', 'error');
            return;
        }
        
        const hero = heroes[selectedHero];
        const sharePopup = document.getElementById('share-popup');
        const shareMethods = document.getElementById('share-methods');
        
        // Generate share data
        const buildData = {
            hero: selectedHero,
            powers: selectedPowers.map(p => p.id),
            items: selectedItems.map(i => i.id)
        };
        
        // Encode as base64 to make it more compact
        const encodedData = btoa(JSON.stringify(buildData));
        const shareURL = `${window.location.origin}${window.location.pathname}?build=${encodedData}`;
        
        // Generate text summary
        const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
        
        let shareText = `STADITECH BUILDER - ${hero.name} Build\n`;
        shareText += `Hero: ${hero.name} (${hero.role})\n`;
        shareText += `Total Cost: ${totalCost} Stadium Cash\n\n`;
        
        if (selectedPowers.length > 0) {
            shareText += `POWERS:\n`;
            selectedPowers.forEach(power => {
                shareText += `- ${power.name}\n`;
            });
            shareText += `\n`;
        }
        
        if (selectedItems.length > 0) {
            shareText += `ITEMS:\n`;
            selectedItems.forEach(item => {
                shareText += `- ${item.name} (${item.cost})\n`;
            });
            shareText += `\n`;
        }
        
        shareText += `Load this build: ${shareURL}\n`;
        shareText += `Created with Staditech Builder`;
        
        // Generate Discord formatting
        let discordText = `**STADITECH BUILDER - ${hero.name} Build**\n`;
        discordText += `Hero: ${hero.name} (${hero.role})\n`;
        discordText += `Total Cost: ${totalCost} Stadium Cash\n\n`;
        
        if (selectedPowers.length > 0) {
            discordText += `**POWERS:**\n`;
            selectedPowers.forEach(power => {
                discordText += `- ${power.name}\n`;
            });
            discordText += `\n`;
        }
        
        if (selectedItems.length > 0) {
            discordText += `**ITEMS:**\n`;
            selectedItems.forEach(item => {
                discordText += `- ${item.name} (${item.cost})\n`;
            });
            discordText += `\n`;
        }
        
        discordText += `Load this build: ${shareURL}\n`;
        discordText += `Created with Staditech Builder`;
        
        // Clear existing methods
        shareMethods.innerHTML = '';
        
        // Add URL share method
        const urlMethod = document.createElement('div');
        urlMethod.className = 'share-method';
        urlMethod.innerHTML = `
            <div class="share-method-header">
                <div class="share-method-icon">
                    <i class="fas fa-link"></i>
                </div>
                <div class="share-method-title">Share URL</div>
            </div>
            <p>Share this link for others to load your build directly:</p>
            <div class="url-input-container">
                <input type="text" value="${shareURL}" readonly class="url-input" id="share-url-input">
                <button class="copy-url-btn" id="copy-url-btn">
                    <i class="fas fa-copy"></i> Copy
                </button>
            </div>
        `;
        shareMethods.appendChild(urlMethod);
        
        // Add text share method
        const textMethod = document.createElement('div');
        textMethod.className = 'share-method';
        textMethod.innerHTML = `
            <div class="share-method-header">
                <div class="share-method-icon">
                    <i class="fas fa-file-alt"></i>
                </div>
                <div class="share-method-title">Share as Text</div>
            </div>
            <p>Copy this text to share your build in forums or emails:</p>
            <textarea readonly class="text-share-area" id="text-share-area">${shareText}</textarea>
            <button class="copy-text-btn" id="copy-text-btn">
                <i class="fas fa-copy"></i> Copy Text
            </button>
        `;
        shareMethods.appendChild(textMethod);
        
        // Add Discord share method
        const discordMethod = document.createElement('div');
        discordMethod.className = 'share-method';
        discordMethod.innerHTML = `
            <div class="share-method-header">
                <div class="share-method-icon" style="background-color: #5865F2;">
                    <i class="fab fa-discord"></i>
                </div>
                <div class="share-method-title">Share to Discord</div>
            </div>
            <p>Copy this formatted text to share in Discord:</p>
            <textarea readonly class="text-share-area" id="discord-share-area">${discordText}</textarea>
            <button class="copy-text-btn" id="copy-discord-btn" style="background-color: #5865F2;">
                <i class="fas fa-copy"></i> Copy for Discord
            </button>
        `;
        shareMethods.appendChild(discordMethod);
       
        
        // Add event listeners for copy buttons
        document.getElementById('copy-url-btn').addEventListener('click', () => {
            const urlInput = document.getElementById('share-url-input');
            urlInput.select();
            document.execCommand('copy');
            showToast('URL copied to clipboard!');
        });
        
        document.getElementById('copy-text-btn').addEventListener('click', () => {
            const textArea = document.getElementById('text-share-area');
            textArea.select();
            document.execCommand('copy');
            showToast('Text copied to clipboard!');
        });
        
        document.getElementById('copy-discord-btn').addEventListener('click', () => {
            const discordArea = document.getElementById('discord-share-area');
            discordArea.select();
            document.execCommand('copy');
            showToast('Discord text copied to clipboard!');
        });
        
        // Show the popup
        sharePopup.classList.add('active');
    }
    
    // Initialize share features
// Function to post build to Discord webhook
function postBuildToDiscord(build) {
  // Discord webhook URL
  const webhookUrl = "https://discord.com/api/webhooks/1366651926959095892/fANkUR_cUgnMoTLlfhgxSBx0kY8x3Pvr97CuS6uhKg5CF--8R37BrTFeYpMNNtnwJTO1";
  
  // Generate build URL
  const buildData = {
    hero: build.hero,
    powers: build.powers.map(p => p.id),
    items: build.items.map(i => i.id)
  };
  const encodedData = btoa(JSON.stringify(buildData));
  const shareURL = `${window.location.origin}${window.location.pathname}?build=${encodedData}`;
  
  // Calculate total cost
  const totalCost = build.items.reduce((total, item) => total + item.cost, 0);
  
  // Create embed
  const embed = {
    title: build.name,
    description: `A new Stadium build has been created!`,
    color: 16754470, // OW orange color
    fields: [
      {
        name: "Hero",
        value: `${heroes[build.hero].name} (${heroes[build.hero].role})`,
        inline: true
      },
      {
        name: "Powers",
        value: build.powers.length > 0 ? build.powers.map(p => p.name).join(", ") : "None",
        inline: true
      },
      {
        name: "Total Cost",
        value: `${totalCost} Stadium Cash`,
        inline: true
      },
    ],
    footer: {
      text: "Created with Staditech Builder"
    },
    timestamp: new Date().toISOString()
  };
  
  // Create webhook data
  const webhookData = {
    content: `**${build.name}**\nBuild Link: ${shareURL}`,
    embeds: [embed]
  };
  
  // Send webhook
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(webhookData)
  }).catch(error => console.error("Error posting to Discord:", error));
}
// Function that posts to Discord without notifying user
function postToDiscord(shareURL) {
    // Discord webhook URL
    const webhookUrl = "https://discord.com/api/webhooks/1366651926959095892/fANkUR_cUgnMoTLlfhgxSBx0kY8x3Pvr97CuS6uhKg5CF--8R37BrTFeYpMNNtnwJTO1";
    
    // Get hero info
    const hero = heroes[selectedHero];
    
    // Calculate total cost
    const totalCost = selectedItems.reduce((total, item) => total + item.cost, 0);
    
    // Create simple content message
    const content = `**Build Shared!**
  Hero: ${hero.name} (${hero.role})
  Powers: ${selectedPowers.map(p => p.name).join(", ") || "None"}
  Items: ${selectedItems.length} items (${totalCost} Stadium Cash)
  Build URL: ${shareURL}`;
  
    // Use the simplest possible payload
    const webhookData = {
      content: content
    };
    
    // Send webhook with error handling but no user notification
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    })
    .then(response => {
      if (!response.ok) {
        console.error(`Discord webhook failed: ${response.status} ${response.statusText}`);
      } else {
        console.log("Discord webhook sent successfully");
      }
    })
    .catch(error => {
      console.error("Error posting to Discord:", error);
    });
  }
    
    // Create a mutation observer to watch for DOM changes
    const observer = new MutationObserver(() => {
        setupImageErrorHandlers();
    });
    
    // Start observing the document body for DOM changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Initialize
    generateHeroCards();
    
    // Select first hero by default
    if (heroSelector.children.length > 0) {
        heroSelector.children[0].click();
    }
    // Privacy policy functionality
document.getElementById('privacy-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('privacy-modal').style.display = 'flex';
});

document.getElementById('close-privacy-modal').addEventListener('click', () => {
    document.getElementById('privacy-modal').style.display = 'none';
});
});