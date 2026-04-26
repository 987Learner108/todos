import { useEffect, useState } from "react";
export const DateTime = () => {
    const [dateTime, setDateTime] = useState<string>("");
    useEffect(() => {
      let isMounted = true; // Flag to prevent updates after unmount
    
      const updateTime = () => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        const formattedDate = now.toLocaleDateString('en-US');
        
        // Only update if the component is still in the DOM
        if (isMounted) {
          setDateTime(`${formattedDate} - ${formattedTime}`);
        }
      };
    
      updateTime();
      const intervalId = setInterval(updateTime, 1000);
    
      // CLEANUP: This is the most important part
      return () => {
        isMounted = false; 
        clearInterval(intervalId);
      };
    }, []); // Empty array is correct here
    

    return <h2 className="font-['Montserrat']">{dateTime}</h2>;
}