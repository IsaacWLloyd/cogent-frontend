import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  phrases: string[]
  className?: string
}

export default function TypingAnimation({ phrases, className = '' }: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isComplete || currentPhraseIndex >= phrases.length) return

    const currentPhrase = phrases[currentPhraseIndex]
    
    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing current phrase
        if (currentPhraseIndex < phrases.length - 1) {
          // Move to next phrase after a pause
          const timeout = setTimeout(() => {
            setIsTyping(false)
          }, 1000)
          return () => clearTimeout(timeout)
        } else {
          // Finished all phrases
          setIsComplete(true)
        }
      }
    } else {
      // Erasing current phrase
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        // Start next phrase
        setCurrentPhraseIndex(prev => prev + 1)
        setIsTyping(true)
      }
    }
  }, [currentText, currentPhraseIndex, isTyping, phrases, isComplete])

  return (
    <span className={className}>
      {currentText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}