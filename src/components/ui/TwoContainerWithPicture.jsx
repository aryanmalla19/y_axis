import React from 'react';
import PictureWithSidebar from './PictureWithSidebar';

function TwoContainerWithPicture({ title, url, desc, data=[], colorText, bgColor, bulletPoints=[], buttonData=[], flex }) {
    return (
        <div className={`flex my-7 ${flex} ${bgColor} ${colorText}`}>
            <div className="flex w-6/12 flex-col">
                <div className="w-10/12 mx-auto">
                    <h1 className="text-3xl py-3 mt-8 font-semibold">{title}</h1>
                    <p>{desc}</p>
                </div>

                {/* Render bullet points only if available */}
                
                {bulletPoints && (
                    <ul className="flex list-disc w-9/12 mx-auto flex-col">
                        
                        {bulletPoints?.map((e, index) => (
                            <li className='list-disc' key={index}>{e.name}</li>
                        ))}
                    </ul>
                )}

                <ul className="flex flex-wrap w-10/12 mx-auto justify-between mt-2">
                    {data.map((item, index) => (
                        <li key={index} className="px-5 min-w-40 text-center mt-5 border border-white py-3">
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* Render buttons if buttonData is provided */}
                {buttonData && (
                    <div className="flex w-10/12 mx-auto mt-5">
                        {buttonData.map((button, index) => (
                            <a
                                key={index}
                                href={button.link}
                                className={`mr-4 px-5 py-2 ${button.color?"text-white":" border border-black text-black"}  ${button.color}`}
                                target="_blank" rel="noopener noreferrer"
                            >
                                {button.btnText}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Conditional reverse flex layout for PictureWithSidebar */}
            <PictureWithSidebar
                flex={flex === "flex-row" ? "flex-row-reverse" : "flex-row"}
                color="bg-red-600"
                width="w-6/12"
                url={url}
            />
        </div>
    );
}

// Define default props for flex direction
TwoContainerWithPicture.defaultProps = {
    flex: 'flex-row'
};

export default TwoContainerWithPicture;
