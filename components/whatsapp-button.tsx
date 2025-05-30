"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "+918838567933" // Replace with your actual WhatsApp business number
  const message = "Hello! I'm interested in learning more about EATEK."

  useEffect(() => {
    // Show the button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="mb-4 p-4 bg-white rounded-lg shadow-lg border border-teal-100 w-72"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-teal-700">Chat with us</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions? Chat with our team directly through WhatsApp for quick assistance.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Start Chat
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
