import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-black">
                <p className="text-lg mb-4">
                    Welcome to our website! We are passionate about delivering the best experience for our users.
                    Our mission is to provide high-quality content and services that meet the needs and expectations
                    of our audience.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                <p className="mb-4">
                    Our journey began in 2020 with a small team of dedicated individuals who believed in the power of
                    technology to bring people together. Over the years, we have grown into a diverse team of professionals
                    committed to innovation and excellence.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                <p className="mb-4">
                    Our team is composed of talented individuals from various backgrounds, each bringing unique skills and
                    perspectives to the table. We believe in fostering a collaborative and inclusive work environment where
                    everyone can thrive.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                <p className="mb-4">
                    We are guided by our core values of integrity, innovation, and customer focus. We strive to uphold these
                    values in everything we do, from the products we create to the way we interact with our community.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p>
                    If you have any questions or would like to learn more about us, feel free to reach out. We are always
                    here to help and look forward to hearing from you.
                </p>
                <div className="mt-6">
                    <a
                        href="/contact-us"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
