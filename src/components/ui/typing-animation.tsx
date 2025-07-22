import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  phrases: string[]
  className?: string
  onComplete?: () => void
  triggerOnScroll?: boolean
}

export default function TypingAnimation({ phrases, className = '', onComplete, triggerOnScroll = false }: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(!triggerOnScroll)
  const [backgroundWidth, setBackgroundWidth] = useState(0)

  useEffect(() => {
    if (!triggerOnScroll) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('typing-animation-trigger')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [triggerOnScroll, hasStarted])

  // Update background width when text changes
  useEffect(() => {
    if (!hasStarted) return
    
    // Create a temporary element to measure text width
    const tempElement = document.createElement('span')
    tempElement.style.visibility = 'hidden'
    tempElement.style.position = 'absolute'
    tempElement.style.whiteSpace = 'nowrap'
    tempElement.className = className
    tempElement.textContent = currentText
    
    document.body.appendChild(tempElement)
    const width = tempElement.offsetWidth
    document.body.removeChild(tempElement)
    
    setBackgroundWidth(width)
  }, [currentText, className, hasStarted])

  useEffect(() => {
    if (isComplete || currentPhraseIndex >= phrases.length || !hasStarted) return

    const currentPhrase = phrases[currentPhraseIndex]
    
    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
        }, 50) // 50% faster (was 100ms, now 50ms)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing current phrase
        if (currentPhraseIndex < phrases.length - 1) {
          // Move to next phrase after a pause
          const timeout = setTimeout(() => {
            setIsTyping(false)
          }, 2000) // Longer pause between phrases
          return () => clearTimeout(timeout)
        } else {
          // Finished all phrases
          setIsComplete(true)
          onComplete?.()
        }
      }
    } else {
      // Erasing current phrase
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 25) // 50% faster (was 50ms, now 25ms)
        return () => clearTimeout(timeout)
      } else {
        // Start next phrase
        setCurrentPhraseIndex(prev => prev + 1)
        setIsTyping(true)
      }
    }
  }, [currentText, currentPhraseIndex, isTyping, phrases, isComplete, hasStarted])

  return (
    <span className={`relative ${className}`} id={triggerOnScroll ? 'typing-animation-trigger' : undefined}>
      <span 
        className="absolute inset-0 bg-black transition-all duration-75 ease-out"
        style={{ 
          width: `${backgroundWidth}px`,
          height: '100%'
        }}
      />
      <span className="relative z-10">
        {currentText}
        {!isComplete && hasStarted && <span className="animate-pulse">|</span>}
      </span>
    </span>
  )
}