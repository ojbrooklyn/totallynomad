export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Tax' | 'Guides' | 'Cost of Living' | 'Visa' | 'Banking';
  author: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: '5-things-americans-get-wrong-about-moving-to-portugal',
    title: '5 Things Americans Get Wrong About Moving to Portugal',
    excerpt: 'Portugal consistently tops "best countries to retire abroad" lists, but most Americans show up with a suitcase full of misconceptions. Here\'s what the reality actually looks like.',
    category: 'Guides',
    author: 'TotallyNomad Team',
    date: '2026-03-10',
    readTime: '6 min read',
    content: `Portugal has become the default answer when Americans google "where should I move abroad?" — and for good reason. It's safe, affordable relative to Western Europe, English-friendly, and the food is incredible. But after helping thousands of Americans make the move, we've noticed the same five misconceptions come up over and over again.

## 1. "Getting a Visa Is Easy — I'll Just Show Up"

This is probably the single biggest mistake. Portugal offers several visa paths for Americans — the D7 Passive Income Visa, the D8 Digital Nomad Visa, and the Golden Visa (now limited to investment funds and commercial real estate outside Lisbon/Porto). None of them are "show up and figure it out" situations.

The D7 visa, which is the most popular route for retirees and remote workers with passive income, requires proof of stable income (roughly €820/month for a single applicant, though consulates often expect more), a Portuguese bank account, an NIF (tax identification number), proof of accommodation, and a clean criminal background check — all apostilled and sometimes translated by a certified translator.

Processing times vary wildly. Some consulates in the U.S. process applications in 60 days; others take six months. The San Francisco consulate and the D.C. embassy have historically been the fastest, but this changes. Start your paperwork at least 6–8 months before you want to move.

**Bottom line:** The visa is very achievable, but it requires real planning. Don't book a one-way ticket before your visa is approved.

## 2. "It's Basically as Cheap as Mexico"

This one catches people off guard. Portugal is the cheapest country in Western Europe — but it's still Western Europe. Lisbon, in particular, has gotten significantly more expensive since 2020. A one-bedroom apartment in central Lisbon now runs €900–€1,400/month. In Porto, you're looking at €700–€1,100.

If you move outside the major cities — places like Braga, Aveiro, Coimbra, or the Algarve interior — costs drop dramatically. A comfortable life for a single person outside Lisbon is very doable on €1,500–€2,000/month including rent. In Lisbon proper, budget closer to €2,500–€3,000.

Groceries are genuinely cheap by American standards. A week of groceries at Pingo Doce or Continente runs €40–€60 for one person. Dining out at a local tasca (tavern) costs €8–€12 for a full meal with wine. But trendy brunch spots in Lisbon? Those are creeping toward New York prices.

**Bottom line:** Portugal is affordable, but not cheap. Your lifestyle choices — especially where you live — make an enormous difference.

## 3. "Everyone Speaks English, So I Don't Need to Learn Portuguese"

In Lisbon and Porto, especially in tourist areas, you can get by with English almost everywhere. Younger Portuguese people, in particular, tend to speak excellent English. But "getting by" and "building a life" are very different things.

Outside the major cities, English proficiency drops off quickly. Government offices, healthcare facilities, and local businesses in smaller towns operate primarily in Portuguese. If you need to deal with Finanças (tax office), AIMA (immigration), or your local câmara municipal, expect everything to be in Portuguese.

Beyond practicality, there's a respect factor. The Portuguese are famously welcoming, but they deeply appreciate foreigners who make an effort to learn their language. Even basic conversational Portuguese — ordering food, making small talk, handling a taxi ride — opens doors that English never will.

**Bottom line:** You can survive without Portuguese, but you'll thrive with it. Start learning before you arrive. A1/A2 level makes a real difference.

## 4. "Portuguese Healthcare Is Probably Not Great"

This misconception usually comes from Americans who've never experienced a universal healthcare system. Portugal's Serviço Nacional de Saúde (SNS) consistently ranks in the top 15 healthcare systems worldwide — ahead of the United States in most global rankings.

As a legal resident, you're entitled to access the SNS. A visit to a centro de saúde (health center) costs €4.50 for a general consultation. Emergency room visits are €14 (waived if referred by your doctor). Prescriptions are heavily subsidized.

The catch? Wait times. Non-urgent specialist appointments through the public system can take weeks or months. This is why many expats — especially those coming from the U.S. where immediate specialist access is normal — also carry private health insurance. A good private plan costs €50–€150/month depending on age and coverage, and gives you access to excellent private hospitals like Hospital da Luz or CUF.

**Bottom line:** Portuguese healthcare is excellent. Most expats use a combination of public (for general care and emergencies) and private (for specialists and convenience).

## 5. "I Won't Owe U.S. Taxes Anymore"

This is the most dangerous misconception on the list. The United States is one of only two countries in the world (along with Eritrea) that taxes citizens on worldwide income regardless of where they live. Moving to Portugal does not free you from filing U.S. taxes.

You will need to file a U.S. tax return every year. You may also need to file an FBAR (FinCEN Form 114) reporting foreign bank accounts if your aggregate balance exceeds $10,000 at any point during the year. Form 8938 (FATCA reporting) may also apply depending on your asset thresholds.

The good news: the Foreign Earned Income Exclusion (FEIE) lets you exclude up to $126,500 (2025) of earned income from U.S. taxes if you qualify under the Physical Presence Test or Bona Fide Residence Test. The Foreign Tax Credit can also offset U.S. taxes with taxes paid to Portugal.

Portugal's own tax system offers the Non-Habitual Resident (NHR) regime — or its successor program — which can provide favorable tax treatment for the first 10 years of residency. But NHR has been reformed multiple times, and the details matter enormously. Get professional tax advice from someone who understands both U.S. and Portuguese tax law.

**Bottom line:** You'll file taxes in both countries. Plan for it. A cross-border tax specialist is not optional — it's essential.

## The Real Bottom Line

Portugal is genuinely one of the best places an American can move abroad. The quality of life, safety, food, weather, and culture are hard to beat. But going in with realistic expectations makes the difference between a dream move and an expensive lesson.

Start your visa paperwork early. Budget realistically. Learn some Portuguese. Appreciate the healthcare system. And for the love of all things holy, hire a tax professional who knows both countries.`,
  },
  {
    slug: 'feie-explained-save-120k-taxes-living-abroad',
    title: 'FEIE Explained: How to Save Up to $120K in Taxes Living Abroad',
    excerpt: 'The Foreign Earned Income Exclusion is the single biggest tax break available to Americans living overseas. Here\'s how it works, who qualifies, and the mistakes that get people audited.',
    category: 'Tax',
    author: 'TotallyNomad Team',
    date: '2026-02-25',
    readTime: '8 min read',
    content: `If you're an American living and working abroad, the Foreign Earned Income Exclusion (FEIE) is probably the most important tax provision you'll ever encounter. It lets you exclude a significant chunk of your earned income from U.S. federal income tax — up to $126,500 for tax year 2025. That's real money back in your pocket.

But the FEIE is also one of the most commonly misunderstood and misapplied tax provisions. Get it right, and you could owe zero federal income tax on your first $126,500 of earnings. Get it wrong, and you could face penalties, back taxes, and an IRS audit.

## What Is the FEIE?

The Foreign Earned Income Exclusion, claimed on IRS Form 2555, allows qualifying U.S. citizens and resident aliens living abroad to exclude foreign earned income from their U.S. taxable income. For tax year 2025, the maximum exclusion is $126,500 per person (up from $120,000 in 2023 and $126,500 in 2024 — the IRS adjusts annually for inflation).

**Key distinction:** The FEIE only applies to **earned income** — wages, salaries, self-employment income, and professional fees. It does **not** apply to passive income like dividends, interest, rental income, capital gains, pensions, or Social Security benefits. If your income is primarily passive, the FEIE won't help you, and you should look at the Foreign Tax Credit instead.

## Who Qualifies?

To claim the FEIE, you must meet **two requirements:**

### 1. Tax Home Test
Your "tax home" must be in a foreign country. The IRS defines your tax home as your regular or principal place of business, employment, or post of duty — not necessarily where your family lives. If you're working remotely from Lisbon, your tax home is Lisbon.

**Warning:** If you maintain a home in the United States and don't have a clear principal place of business abroad, the IRS may argue your tax home is still in the U.S. This is the most common audit trigger for FEIE claims.

### 2. Either the Physical Presence Test OR the Bona Fide Residence Test

**Physical Presence Test (PPT):** You must be physically present in a foreign country (or countries) for at least 330 full days during any consecutive 12-month period. "Full days" means 24 hours — the days you depart and arrive in the U.S. don't count. This is the easier test to meet and doesn't require establishing residency anywhere.

**Bona Fide Residence Test (BFR):** You must be a bona fide resident of a foreign country for an uninterrupted period that includes an entire tax year (January 1 through December 31). This is a facts-and-circumstances test — the IRS looks at your intent to stay, integration into the foreign community, and whether you maintained a permanent home abroad.

## How to Calculate Your Exclusion

The FEIE is prorated based on the number of qualifying days in the tax year. If you qualify for the full year (all 365 days), you can exclude up to the full $126,500. If you only qualify for part of the year — say you moved abroad on April 1 — your exclusion is prorated:

**Prorated exclusion = $126,500 × (qualifying days / 365)**

So if you qualify for 275 days: $126,500 × (275/365) = $95,308 maximum exclusion.

## The Housing Exclusion: The FEIE's Lesser-Known Companion

In addition to the income exclusion, you can also claim the **Foreign Housing Exclusion** (for employees) or **Foreign Housing Deduction** (for self-employed individuals). This lets you exclude or deduct certain housing expenses that exceed a base amount set by the IRS.

The base housing amount for 2025 is approximately $19,248 (16% of the FEIE limit). Housing expenses above this base, up to a cap that varies by city, can be excluded. In high-cost cities like London, Hong Kong, or Tokyo, the housing exclusion can be worth an additional $20,000–$40,000.

Qualifying housing expenses include rent, utilities (excluding phone and internet), insurance, and parking — but not the cost of buying a home, furniture, or domestic help.

## Common Mistakes That Get People in Trouble

### Mistake 1: Not Tracking Days Carefully
The 330-day rule for the Physical Presence Test is strict. Many people lose their FEIE because they came back to the U.S. for holidays, family emergencies, or work meetings without realizing they'd exceeded the 35-day limit. **Track every single day.** Use a spreadsheet or an app. The IRS can and does verify travel records.

### Mistake 2: Confusing Earned and Unearned Income
You cannot exclude investment income, rental income, or retirement distributions using the FEIE. If you're a freelancer with a mix of client income (earned) and investment dividends (unearned), only the client income qualifies.

### Mistake 3: Forgetting State Taxes
The FEIE is a **federal** provision. It does not affect state income taxes. If you're a resident of a state with income tax — California, New York, Virginia — you may still owe state taxes on your worldwide income even after claiming the FEIE. Some states (like California) are notoriously aggressive about this. The cleanest solution is to establish domicile in a no-income-tax state (Texas, Florida, Nevada, etc.) before moving abroad.

### Mistake 4: Not Filing at All
Some Americans abroad assume that if they owe no federal tax after the FEIE, they don't need to file. **Wrong.** You must file a return to claim the exclusion. Failure to file can result in losing the FEIE for that year, plus penalties. The filing deadline for Americans abroad is automatically extended to June 15, with a further extension to October 15 available on request.

### Mistake 5: Claiming the FEIE AND the Foreign Tax Credit on the Same Income
You cannot double-dip. Income excluded under the FEIE cannot also generate a Foreign Tax Credit. However, you can use both provisions strategically — for example, using the FEIE on your first $126,500 of earned income and the FTC on income above that amount or on passive income taxed abroad.

## FEIE vs. Foreign Tax Credit: Which Should You Choose?

This is the million-dollar question (sometimes literally). The answer depends on your specific situation:

**Choose the FEIE if:** You live in a low-tax or no-tax country (UAE, Panama, Thailand) and your earned income is under $126,500. The FEIE will eliminate your U.S. federal tax liability entirely.

**Choose the FTC if:** You live in a high-tax country (most of Western Europe, Japan, Australia) where you're paying more in local taxes than you would owe in U.S. taxes. The FTC lets you offset your U.S. tax with taxes paid abroad, and excess credits can be carried forward.

**Use both if:** Your income exceeds $126,500 or you have a mix of earned and passive income. Claim the FEIE on your first $126,500 of earned income, then use the FTC on the rest.

**Important:** Once you revoke the FEIE election, you cannot re-elect it for five years without IRS approval. Think carefully before switching strategies.

## How to Claim It

1. File IRS **Form 2555** with your annual tax return (Form 1040)
2. Attach documentation proving your foreign tax home and qualifying days
3. If using the Physical Presence Test, complete Part III of Form 2555 with your travel dates
4. If using the Bona Fide Residence Test, complete Part II
5. For the Housing Exclusion, complete Part VI

We strongly recommend working with a tax preparer who specializes in U.S. expat taxes. Firms like Greenback Expat Tax Services, Bright!Tax, and MyExpatTaxes specialize in this area. Expect to pay $500–$1,500 for a return involving the FEIE, which is more than a domestic return — but the stakes are much higher.

## The Bottom Line

The FEIE is the most powerful tax tool in the American expat's toolkit. If you qualify, it can eliminate federal income tax on your first $126,500 of earned income. But it requires careful planning, meticulous record-keeping, and an understanding of how it interacts with other provisions like the Foreign Tax Credit and state taxes.

Don't leave money on the table — and don't take shortcuts that could trigger an audit. Get professional help, track your days, and file your return on time. Your future self will thank you.`,
  },
  {
    slug: 'real-cost-of-living-mexico-city-2026',
    title: 'The Real Cost of Living in Mexico City in 2026',
    excerpt: 'Forget the outdated "$1,000/month" claims. Here\'s what it actually costs to live well in CDMX in 2026, neighborhood by neighborhood, with real numbers.',
    category: 'Cost of Living',
    author: 'TotallyNomad Team',
    date: '2026-03-05',
    readTime: '7 min read',
    content: `Mexico City remains one of the most popular destinations for American expats and digital nomads — and for good reason. World-class food, vibrant culture, excellent infrastructure, and a cost of living that's still dramatically lower than any major U.S. city. But the landscape has changed since the remote work boom of 2020–2022, and the "$1,000 a month" claims that circulate on social media are, in 2026, misleading at best.

Here's what it actually costs to live in Mexico City in 2026, based on current market data, expat surveys, and our own on-the-ground research.

## The Big Number: Monthly Budget Summary

| Category | Budget Range (MXN) | Budget Range (USD) |
|---|---|---|
| Rent (1BR) | $12,000–$28,000 | $670–$1,570 |
| Groceries | $4,000–$6,000 | $225–$335 |
| Dining out | $3,000–$6,000 | $170–$335 |
| Transport | $1,500–$3,000 | $85–$170 |
| Utilities | $1,500–$2,500 | $85–$140 |
| Internet | $500–$800 | $28–$45 |
| Health insurance | $2,000–$6,000 | $112–$335 |
| Misc/entertainment | $3,000–$5,000 | $170–$280 |
| **Total** | **$27,500–$57,300** | **$1,540–$3,210** |

A realistic comfortable budget for a single person is **$22,000–$35,000 MXN/month ($1,230–$1,960 USD)** if you're not living in the most expensive neighborhoods. A couple should budget **$35,000–$50,000 MXN/month ($1,960–$2,800 USD)**.

## Rent: The Biggest Variable

Rent is by far your largest expense, and it varies enormously by neighborhood.

### Popular Expat Neighborhoods (Higher Cost)

**Condesa / Roma Norte / Roma Sur:** The classic expat triangle. Tree-lined streets, excellent restaurants, walkable to everything. A furnished 1BR apartment runs **$18,000–$28,000 MXN ($1,010–$1,570 USD)** per month. Studios start around $14,000 MXN. These prices have stabilized after sharp increases in 2022–2023, but they're still the most expensive neighborhoods for rentals.

**Polanco:** Mexico City's upscale neighborhood, comparable to the Upper East Side. Furnished 1BR apartments range from **$22,000–$35,000 MXN ($1,230–$1,960 USD)**. Beautiful, safe, excellent dining — but you'll pay for it.

**Juárez / Cuauhtémoc:** Adjacent to Roma and increasingly popular. Slightly grittier but rapidly improving, with great food and nightlife. 1BR apartments: **$14,000–$22,000 MXN ($785–$1,230 USD)**. This is where a lot of the value is right now.

### Great Value Neighborhoods

**Narvarte / Del Valle:** Middle-class Mexican neighborhoods south of Roma. Safe, well-connected by metro, with local markets and restaurants. 1BR: **$10,000–$16,000 MXN ($560–$895 USD)**. Excellent value and a more authentic experience.

**Coyoacán:** The bohemian neighborhood where Frida Kahlo lived. Charming, green, slightly further from the center. 1BR: **$10,000–$18,000 MXN ($560–$1,010 USD)**. Great for people who don't need to be in the middle of everything.

**Santa María la Ribera:** An up-and-coming neighborhood with beautiful architecture and a growing food scene. 1BR: **$8,000–$14,000 MXN ($450–$785 USD)**. One of the best values in the city.

### Pro Tips for Renting
- **Avoid Airbnb for long-term stays.** Prices are 40–60% higher than direct rentals. Use Inmuebles24, Segundamano, or Facebook groups to find apartments.
- **Expect to pay a deposit** of 1–2 months' rent, plus the first month upfront.
- **Furnished apartments** are widely available and usually include internet.
- **Utilities are separate** from rent in most cases.

## Groceries

Mexico City has an incredible food infrastructure, from upscale supermarkets to neighborhood mercados.

- **Supermarkets (Chedraui, Soriana, La Comer):** A full weekly shop runs $800–$1,200 MXN ($45–$67 USD). Fresh produce is exceptionally cheap — avocados for $3–5 MXN each, limes by the kilo for $15–25 MXN.
- **Mercados:** Even cheaper. Mercado de Medellín in Roma, Mercado de San Juan downtown, and your local neighborhood market all offer fresh produce, meat, cheese, and prepared foods at a fraction of supermarket prices.
- **Specialty/imported items:** This is where costs add up. Imported cheese, craft beer, specialty coffee beans, and American brand-name products cost 2–3x what they do in the U.S. If you want Whole Foods-quality organic everything, budget accordingly.

**Realistic monthly grocery budget:** $4,000–$6,000 MXN ($225–$335 USD) for one person eating mostly local food.

## Dining Out

This is where CDMX truly shines. The restaurant scene is world-class, and eating out is dramatically cheaper than in any major U.S. city.

- **Street food / fondas:** A full comida corrida (set lunch) at a fonda costs $70–$120 MXN ($4–$7 USD) for soup, main course, drink, and dessert. Tacos from a street stand: $10–$25 MXN each ($0.55–$1.40).
- **Mid-range restaurants:** A dinner for two with drinks at a good Roma/Condesa restaurant: $600–$1,200 MXN ($34–$67 USD).
- **High-end dining:** Mexico City has some of the best restaurants in the world (Pujol, Quintonil, Contramar). Dinner for two: $2,000–$4,000 MXN ($112–$224 USD).
- **Coffee:** An americano at a specialty coffee shop: $50–$80 MXN ($2.80–$4.50 USD). At a chain like Cielito Querido: $40–$55 MXN.

**Realistic monthly dining budget:** $3,000–$6,000 MXN ($170–$335 USD) for someone who mixes street food with occasional restaurant meals.

## Transportation

Mexico City's public transport is one of the best values anywhere in the world.

- **Metro:** $5 MXN per ride ($0.28 USD). Yes, five pesos. It's one of the cheapest subway systems on earth, covering most of the city.
- **Metrobús:** $6 MXN per ride. Bus rapid transit with dedicated lanes.
- **Uber / DiDi:** Very affordable. A 20-minute ride across the city: $60–$120 MXN ($3.40–$6.70 USD). Uber is everywhere and reliable.
- **Ecobici (bike share):** $500 MXN/year ($28 USD). Stations across Roma, Condesa, Polanco, and the center. Great for daily commuting.

**Realistic monthly transport budget:** $1,500–$3,000 MXN ($85–$170 USD) mixing metro and occasional Uber rides.

## Healthcare

Healthcare in Mexico is excellent and affordable compared to the U.S.

- **Private health insurance:** $2,000–$6,000 MXN/month ($112–$335 USD) depending on age and coverage level. Major providers include GNP, AXA, and Metlife Mexico.
- **Doctor visits (without insurance):** A general practitioner visit costs $500–$1,000 MXN ($28–$56 USD). Specialist visits: $800–$2,000 MXN.
- **Pharmacy:** Farmacias Similares offers generic medications at very low prices. Many common medications that require a prescription in the U.S. are available over the counter.
- **Dental care:** A cleaning costs $500–$1,000 MXN ($28–$56 USD). Root canals, crowns, and implants are 60–80% cheaper than in the U.S., which is why "dental tourism" to Mexico is so popular.

## Internet and Connectivity

Internet in Mexico City is fast and reliable, especially in central neighborhoods.

- **Home internet (Telmex/Izzi):** 100–200 Mbps for $400–$700 MXN/month ($22–$39 USD). Fiber is increasingly available.
- **Coworking spaces:** WeWork, Homework, Centraal — expect $3,000–$6,000 MXN/month ($170–$335 USD) for a hot desk. Day passes run $200–$400 MXN.
- **Cell phone:** Telcel or AT&T Mexico plans with 5–10 GB data: $200–$400 MXN/month ($11–$22 USD).

## The Verdict

Mexico City in 2026 is not the "$1,000/month paradise" that some influencers still claim. But it is a genuinely affordable world-class city where you can live very well on a fraction of what you'd spend in New York, San Francisco, or even Austin. Budget $1,500–$2,000 USD/month for a comfortable single life, and you'll eat well, live well, and have money left over to explore one of the most fascinating cities on the planet.`,
  },
  {
    slug: 'digital-nomad-visa-comparison-portugal-spain-thailand',
    title: 'Digital Nomad Visa Comparison: Portugal vs Spain vs Thailand',
    excerpt: 'Three of the most popular digital nomad visa programs compared head-to-head: requirements, costs, income thresholds, tax implications, and path to residency.',
    category: 'Visa',
    author: 'TotallyNomad Team',
    date: '2026-02-15',
    readTime: '7 min read',
    content: `The digital nomad visa landscape has exploded since 2021, with over 50 countries now offering some form of remote work visa. But not all digital nomad visas are created equal. Some are basically tourist visa extensions with a fancy name; others are genuine pathways to long-term residency.

We're comparing three of the most popular and well-established programs: Portugal's D8 Digital Nomad Visa, Spain's Digital Nomad Visa (Ley de Startups), and Thailand's Long-Term Resident (LTR) Visa / Digital Workation Visa. These three represent different approaches — European residency pathway, EU startup ecosystem access, and Southeast Asian lifestyle flexibility.

## At a Glance

| Feature | Portugal D8 | Spain Digital Nomad | Thailand LTR/DW |
|---|---|---|---|
| **Min. income** | €3,510/month | €3,256/month | $80,000/year (LTR) or $24,000/year (DW) |
| **Initial duration** | 1 year (renewable) | 1 year (renewable to 3) | 5 years (LTR) or 180 days (DW) |
| **Application fee** | ~€90 visa + €170 residence | ~€80 visa | ~$50–$100 (DW) / $600+ (LTR) |
| **Can work locally?** | No (foreign income only) | Yes (under conditions) | No (foreign income only) |
| **Path to residency** | Yes → permanent residency in 5 years | Yes → permanent residency in 5 years | No direct path |
| **Path to citizenship** | Yes → citizenship in 5 years | Yes → citizenship in 10 years | No |
| **Tax rate** | 20% flat (NHR successor) | 15% flat (first 4 years) | 17% flat (LTR) / exempt (DW < 180 days) |

## Portugal: The D8 Digital Nomad Visa

### Requirements
- Proof of remote employment or self-employment with a company outside Portugal
- Minimum monthly income of **€3,510** (four times the Portuguese minimum wage as of 2026)
- Health insurance valid in Portugal
- Clean criminal record
- Portuguese NIF (tax identification number)
- Proof of accommodation in Portugal

### The Process
Apply at a Portuguese consulate in the U.S. before traveling. You'll receive a temporary visa (4 months), then convert it to a residence permit after arriving in Portugal. The residence permit is valid for 2 years and renewable.

Processing times have improved significantly since AIMA (the immigration agency) reforms in late 2025, but still expect 2–4 months for the initial visa and another 1–3 months for the residence permit conversion.

### Tax Implications
Portugal's former NHR (Non-Habitual Resident) regime was replaced in 2024 with a new incentive program for new residents. Digital nomad visa holders can qualify for a **20% flat tax rate** on Portuguese-source income for the first 10 years. Foreign-source income may be exempt or taxed at reduced rates depending on the type and origin.

**Important for Americans:** You'll still file U.S. taxes. The FEIE can exclude up to $126,500 of earned income, and Foreign Tax Credits can offset Portuguese taxes paid. Work with a cross-border tax specialist.

### Pros
- **Strongest residency pathway:** 5 years to permanent residency, 5 years to citizenship (one of the fastest in Europe)
- **EU access:** Residence permit gives you Schengen zone freedom of movement
- **Quality of life:** Excellent healthcare, safety, food, climate
- **English-friendly:** Especially in Lisbon and Porto

### Cons
- **Income threshold creep:** €3,510/month is higher than it used to be
- **Bureaucracy:** Portuguese government services are notoriously slow, though improving
- **Cost of living rising:** Lisbon is no longer a "budget" European capital
- **No local employment:** You cannot work for Portuguese companies on this visa

## Spain: The Digital Nomad Visa (Ley de Startups)

### Requirements
- Proof of remote work for a company outside Spain, or freelance work where at least 80% of income comes from outside Spain
- Minimum income of **€3,256/month** (200% of Spain's minimum wage)
- No prior Spanish tax residency in the last 5 years
- Health insurance valid in Spain
- Clean criminal record
- A real employment or client relationship (not just savings)

### The Process
Spain's process is relatively streamlined compared to Portugal. You can apply from Spain (if you're there legally, e.g., on a tourist visa) or from a Spanish consulate abroad. The initial authorization is for 1 year, renewable for up to 3 additional years. Total possible stay: 4 years before transitioning to a standard residence permit.

Processing times are typically 20–45 business days — faster than most European countries.

### Tax Implications
This is Spain's big selling point. Digital nomad visa holders can opt into the **Beckham Law** regime, which taxes Spanish-source income at a flat **15% rate** for the first four years (reduced from the standard 24% in 2025). Foreign-source income (except employment income) is generally exempt.

After the 4-year Beckham period ends, you transition to standard Spanish tax rates (19%–47% progressive). Plan accordingly.

### Pros
- **Favorable tax treatment:** 15% flat rate for 4 years is very competitive
- **Faster processing:** Weeks, not months
- **Lifestyle:** Spain offers incredible quality of life — food, culture, climate, healthcare
- **EU residency:** Schengen freedom of movement
- **Can freelance:** As long as 80%+ of income is from outside Spain

### Cons
- **Shorter initial visa:** 1 year vs. Portugal's 2-year residence permit
- **Slower path to citizenship:** 10 years (vs. Portugal's 5)
- **Tax cliff:** After 4 years, you're on standard Spanish rates, which are high
- **Language:** Less English-friendly than Portugal outside major cities
- **No prior residency:** If you've been a Spanish tax resident in the last 5 years, you don't qualify

## Thailand: LTR Visa and Digital Workation Visa

Thailand offers two distinct options for remote workers, aimed at very different demographics.

### Long-Term Resident (LTR) Visa
**Requirements:**
- Annual income of **$80,000+** (or $40,000+ with a master's degree or investment in Thai government bonds)
- Health insurance with $50,000+ coverage
- Employment with an established company

**Duration:** 5 years, renewable once for a total of 10 years

**Tax:** Flat **17% rate** on Thai-source income. Foreign income remitted to Thailand is taxable but may benefit from double tax treaties.

### Digital Workation Visa (DW)
**Requirements:**
- Annual income of **$24,000+**
- Employment with an established company outside Thailand
- Health insurance

**Duration:** 180 days (not renewable in the same year, but you can reapply)

**Tax:** If you stay under 180 days per year, you're not considered a Thai tax resident and pay **no Thai income tax** on foreign-sourced income.

### Pros
- **Cost of living:** Thailand remains one of the most affordable quality-of-life destinations in the world
- **No path to residency required:** The DW visa is perfect for nomads who don't want to commit
- **Infrastructure:** Excellent internet, coworking spaces, and digital nomad community (especially Chiang Mai and Bangkok)
- **Climate and lifestyle:** Tropical weather, incredible food, rich culture

### Cons
- **No path to citizenship:** Thailand does not offer citizenship through these visa programs
- **LTR income threshold is high:** $80,000/year puts it out of reach for many
- **DW visa is short:** 180 days means you need another plan for the rest of the year
- **Visa stacking complexity:** Many nomads in Thailand still rely on combinations of tourist visas, visa runs, and the DW visa
- **Language barrier:** Thai is a tonal language with its own script — harder for English speakers than European languages

## Which One Should You Choose?

**Choose Portugal if:** You want a long-term home base with a clear path to EU permanent residency and citizenship. You value safety, walkability, and European culture. You're comfortable with bureaucracy and willing to learn Portuguese. Best for people planning to settle somewhere for 5+ years.

**Choose Spain if:** You want the tax advantages (15% for 4 years), faster processing, and an incredible lifestyle. You're comfortable with a shorter visa term and potentially higher taxes after year 4. Best for people who want a 2–4 year European chapter.

**Choose Thailand if:** You want maximum lifestyle value for your money and flexibility. You don't need a path to permanent residency. You're earning enough for the LTR ($80K+) or want a 6-month base with the DW visa. Best for true nomads and high earners who want an Asia base.

## Final Thoughts

There's no single "best" digital nomad visa — only the best one for your specific situation. Consider your income, your timeline, your tax situation, and whether you want a path to permanent residency or citizenship. And always — always — consult with an immigration lawyer before making commitments. Visa rules change frequently, and the stakes are too high to rely on blog posts alone (including this one).`,
  },
  {
    slug: 'how-to-open-bank-account-abroad-as-american',
    title: 'How to Open a Bank Account Abroad as an American',
    excerpt: 'Americans face unique challenges opening foreign bank accounts thanks to FATCA. Here\'s a country-by-country guide, plus the digital banking alternatives that actually work.',
    category: 'Banking',
    author: 'TotallyNomad Team',
    date: '2026-01-20',
    readTime: '7 min read',
    content: `Opening a bank account abroad should be simple. You walk into a bank, show your ID, deposit some money, and walk out with an account. That's how it works for most people.

But you're American. And being American comes with a special banking superpower: the ability to make foreign banks nervous. Thanks to a law called FATCA (the Foreign Account Tax Compliance Act), U.S. citizens are the most difficult nationality on earth to bank internationally. Some banks will flat-out refuse you. Others will add so many compliance requirements that the process takes months.

Here's the complete guide to navigating this uniquely American challenge.

## Why Banks Don't Want American Customers

In 2010, the U.S. passed the Foreign Account Tax Compliance Act (FATCA) as part of a broader effort to combat tax evasion. FATCA requires every foreign financial institution in the world to identify their American account holders and report their account information directly to the IRS.

For banks, this means:
- **Extra compliance costs:** They must implement systems to identify and report on U.S. persons
- **Penalty risk:** Banks that fail to comply face a 30% withholding tax on their U.S.-source income
- **Ongoing reporting:** Annual reports to the IRS via Form 8966

For smaller banks, especially in developing countries, the cost of FATCA compliance can exceed the revenue from American customers. The rational business decision is simply to refuse Americans. This is called "FATCA-driven de-banking," and it's a real and growing problem.

## Country-by-Country Difficulty Guide

### Easy (Expect Success)

**Portugal:** Portuguese banks are very accustomed to American expats. Banco Millennium BCP, Novo Banco, and ActivoBank all accept American customers. You'll need your NIF (tax ID), proof of address in Portugal, passport, and proof of income or employment. The NIF requirement means you need to get your tax number first — which requires an appointment at Finanças or using a fiscal representative. Budget 2–4 weeks for the full process.

**Mexico:** Mexican banks accept American customers, though the process has more paperwork than you'd expect. BBVA Mexico, Banorte, and Citibanamex all work with Americans. You'll need your passport, proof of Mexican address (utility bill or rental contract), and your RFC (Mexican tax ID) or CURP for foreigners. Some branches are friendlier than others — go to a branch in a neighborhood with more expats (Roma, Polanco, Condesa) for a smoother experience.

**United Kingdom:** UK banks have strong FATCA compliance infrastructure and accept Americans without issue. HSBC, Barclays, and Lloyds all work. You'll need proof of UK address and identification. Monzo and Starling (digital banks) are even easier — you can open an account from your phone with a UK address.

### Moderate (Expect Hassle)

**Spain:** Spanish banks will accept Americans but may require extra documentation or have longer processing times. CaixaBank, Santander, and BBVA Spain are your best options. Some branches may initially refuse — escalate to the branch manager or try a different branch. Having your NIE (foreigner identification number) before visiting the bank is essential.

**Thailand:** Thai banks have gotten stricter with non-resident accounts. Bangkok Bank and Kasikornbank are the most foreigner-friendly. You'll typically need your passport, a valid visa (not a tourist visa), proof of Thai address, and sometimes a letter from your embassy. Some branches refuse non-residents entirely — Asoke and Silom branches in Bangkok tend to be more accommodating.

**Costa Rica:** Banking in Costa Rica as an American is doable but slow. BAC Creamer, Scotiabank Costa Rica, and Banco Nacional all accept Americans with residency. Without residency, you'll likely need to use a facilitator or lawyer. The process can take 2–6 weeks.

### Difficult (Expect Rejection or Long Delays)

**Germany:** German banks have become increasingly FATCA-shy. Deutsche Bank, Commerzbank, and traditional Sparkassen often refuse Americans. N26 (digital bank) is your best bet — they accept Americans and the entire process is online. Alternatively, DKB has been reported to accept Americans with an Anmeldung (address registration).

**France:** French banks are notoriously bureaucratic even for French citizens. For Americans, add FATCA complications on top. BNP Paribas and Société Générale may refuse. Boursorama (online bank) has been the most consistently American-friendly option. Budget months, not weeks.

**Switzerland:** Swiss banks used to be the go-to for international banking. Post-FATCA, many Swiss banks have closed American accounts entirely. UBS and Credit Suisse (now part of UBS) maintain American clients but with high minimum balances. Smaller cantonal banks generally refuse Americans.

## The Digital Banking Revolution

The rise of digital banks and fintech has been a game-changer for American expats. These platforms solve many of the traditional banking pain points:

### Wise (Formerly TransferWise)

**What it is:** A multi-currency account with local bank details in 10+ currencies (USD, EUR, GBP, MXN, and more). Not technically a bank, but functions like one for most purposes.

**Why it's essential:** Wise gives you local bank details in multiple countries, meaning you can receive payments as if you had a local bank account. The exchange rates are mid-market (no markup), and international transfers are 3–5x cheaper than traditional banks.

**Limitations:** Not a full bank — no credit products, no mortgage capability, and deposit insurance varies by jurisdiction. Some landlords and employers may not accept Wise account details.

**For Americans:** Fully available. Wise is registered as a money services business in the U.S. and complies with FATCA.

### Revolut

**What it is:** A digital banking app with multi-currency accounts, stock trading, crypto, and international transfers. Headquartered in the UK with a European banking license.

**For Americans:** Revolut launched in the U.S. in 2020 and American users get a USD account. However, the full multi-currency features available to European users are limited for U.S. persons. You can hold and exchange currencies, but you won't get local European bank details like EU residents do.

**Best for:** Americans who want easy currency conversion and a backup debit card for travel.

### Mercury, Relay, or U.S. Digital Banks

If you're self-employed or running a business, keeping a U.S.-based digital bank account is often the simplest solution. Mercury and Relay offer excellent online banking for LLCs and sole proprietors, with no physical branch visits needed. You can manage everything remotely and use Wise for international transfers.

## The Recommended Setup for American Expats

After helping thousands of Americans open foreign bank accounts, here's the setup we recommend:

1. **Keep a U.S. bank account** — Charles Schwab (no foreign ATM fees, no minimum balance) or a credit union that doesn't charge international fees. This is your anchor.

2. **Open a Wise multi-currency account** — This handles your currency conversion and gives you local bank details where available. Use it for receiving foreign-currency payments and paying local bills.

3. **Open a local bank account** in your country of residence — Essential for paying rent, receiving local salary, and building a local financial identity. Use the country-specific guidance above.

4. **Get a no-foreign-transaction-fee credit card** — Chase Sapphire, Capital One Venture, or Amex Platinum. Use this for daily spending to avoid ATM fees and get purchase protections.

## FBAR and FATCA Reporting: Don't Forget

If you have foreign financial accounts with an aggregate balance exceeding **$10,000** at any point during the year, you must file an FBAR (FinCEN Form 114) by April 15 (auto-extended to October 15). This is separate from your tax return.

FATCA reporting (Form 8938) has higher thresholds — $200,000 for single filers living abroad (end of year) or $300,000 at any point during the year. This is filed with your tax return.

**Penalties for non-compliance are severe:** $10,000 per violation for FBAR, and up to $50,000 per violation for FATCA. If you have foreign accounts, file these forms. Period.

## The Bottom Line

Banking abroad as an American is harder than it should be, but it's very much doable with the right approach. Lead with Wise and a solid U.S. bank as your foundation, then add local banking in your country of residence. Be patient, be persistent, and be prepared to try multiple branches or banks.

And whatever you do, file your FBAR. The IRS does not have a sense of humor about unreported foreign accounts.`,
  },
];
