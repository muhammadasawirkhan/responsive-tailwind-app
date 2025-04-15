import React from 'react'
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { question: "What is an NFT?", answer: "An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, often associated with digital art, collectibles, or virtual goods, and is stored on a blockchain." },

    { question: "How do I buy an NFT?", answer: "To buy an NFT, you need a cryptocurrency wallet (such as MetaMask), purchase cryptocurrency (typically Ethereum), and use an NFT marketplace like OpenSea or Rarible to make a purchase." },
  
    { question: "How do I sell an NFT?", answer: "To sell an NFT, you must own the NFT in a compatible wallet, list it for sale on an NFT marketplace, set your desired price, and confirm the transaction on the blockchain." },

    { question: "What cryptocurrencies do you accept?", answer: "Most NFT platforms accept Ethereum (ETH), but some also support Solana (SOL), Polygon (MATIC), Binance Smart Chain (BNB), and other blockchain-based currencies." }

];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div className='max-w-[1056px] space-around mx-auto text-center sm:mt-[90px] lg:-mt-[400px] '>
                <h1 className='text-[64px]'>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <div className="p-4">

                <div className="max-w-[1056px] mx-auto justify-around p-4">
                    
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg shadow-lg">
                                <div
                                    className="flex p-4 cursor-pointer bg-red-500  opacity-[30%] text-white rounded-t-lg"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    <span className="text-lg font-medium ml-3">{faq.question}</span>
                                </div>
                                {openIndex === index && (
                                    <div className="bg-white p-4 text-black rounded-b-lg border border-gray-300">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
export default FAQ;
