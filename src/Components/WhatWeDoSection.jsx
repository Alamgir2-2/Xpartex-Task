import React from 'react';

const WhatWeDoSection = () => {
    const services = [
        {
            title: "Strategy.",
            items: [
                "Analytics and Research",
                "Interactive Workshops",
                "Brand Strategy",
                "Content Strategy",
                "Digital Strategy",
                "Conversion Rate Optimization"
            ]
        },
        {
            title: "Design.",
            items: [
                "Creative Direction",
                "Brand Guides",
                "Prototypes",
                "UI/UX & Web Design",
                "Visual Asset Creation",
                "Motion Design"
            ]
        },
        {
            title: "Development.",
            items: [
                "System Architecture Design",
                "Full-Stack Development",
                "3rd Party Integrations",
                "Performance Optimization",
                "WordPress Development",
                "Shopify Development"
            ]
        }
    ];

    // Underlined item
    const highlightedItems = [
        "Conversion Rate Optimization",
        "UI/UX & Web Design",
        "3rd Party Integrations"
    ];

    return (
        <section id='what-we-do'>
            <div className="bg-black text-white py-16 px-6 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-orange-400">
                        What We Do
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        {services.map(({ title, items }, i) => (
                            <div key={i} className="space-y-8">
                                <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-6">
                                    {title}
                                </h2>

                                <ul className="space-y-3">
                                    {items.map((item, j) => (
                                        <li key={j} className="text-base leading-relaxed">
                                            {highlightedItems.includes(item) ? (
                                                <span className="underline underline-offset-4">
                                                    {item}
                                                </span>
                                            ) : (
                                                item
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
