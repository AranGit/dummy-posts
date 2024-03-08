import { useCallback, useEffect, useRef, useState } from "react"

const wrapClassName = 'overflow-hidden whitespace-nowrap text-clip';

function TextCollapse({ text }: { text: string }) {
  const [isMultiline, setIsMultiline] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = useCallback(() => {
    setIsActive(!isActive)
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.className = containerRef.current.className.replace(wrapClassName, 'normal');
        const computedStyle = window.getComputedStyle(containerRef.current);
        const lineHeight = parseInt(computedStyle.getPropertyValue('line-height').replace('px', ''));
        const height = parseInt(computedStyle.getPropertyValue('height').replace('px', ''));

        //Computed from container's height and front size to make sure this feature still working if font size changed
        //Also padding if needed
        (height > (lineHeight + (lineHeight / 2))) ? setIsMultiline(true) : setIsMultiline(false);

        containerRef.current.className = containerRef.current.className.replace('normal', wrapClassName);
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
  const textClassName = isActive ? '' : isMultiline ? wrapClassName : ''

  return (
    <div className={`relative max-w-full ${textClassName}`} ref={containerRef}>
      <span>{text}</span>
      <span hidden={!isMultiline} className={`text-nowrap text-[#72BFFF] bg-white cursor-pointer select-none ${activeClassName}`} onClick={handleActive}>
        {activeText}
      </span>
    </div>
  )
}

export default TextCollapse
