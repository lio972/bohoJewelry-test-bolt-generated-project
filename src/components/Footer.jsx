import React from 'react'

    export default function Footer() {
      return (
        <footer className="bg-boho-primary text-white py-6 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Boho Jewelry Co. All rights reserved.
            </p>
          </div>
        </footer>
      )
    }
