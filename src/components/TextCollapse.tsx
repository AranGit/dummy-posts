import { useCallback, useEffect, useRef, useState } from "react"


function TextCollapse({ text }: { text: string }) {
  const [isMultiline, setIsMultiline] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = useCallback(() => {
    setIsActive(!isActive)
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      if (textRef.current && textRef.current.clientHeight > 25) {
        setIsMultiline(true);
      } else {
        setIsMultiline(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const activeText = isActive ? '...See Less' : '...See More'
  const activeClassName = isActive ? '' : 'absolute right-0'
  const textClassName = isActive ? '' : isMultiline ? 'overflow-hidden whitespace-nowrap text-clip' : ''

  return (
    <div>
      <div className={`relative max-w-full ${textClassName}`} ref={textRef}>
        {text}
        <span hidden={!isMultiline} className={`text-[#72BFFF] bg-white cursor-pointer select-none ${activeClassName}`} onClick={handleActive}>
          {activeText}
        </span>
      </div>
    </div>
  )
}

export default TextCollapse
