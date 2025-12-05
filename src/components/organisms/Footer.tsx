import { Instagram, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto text-center space-y-3">

        <p>&copy; {new Date().getFullYear()} High Vision. Todos os direitos reservados.</p>

        {/* Links sociais */}
        <div className="flex justify-center gap-6 mt-2">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/highvisionoficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Instagram size={28} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/32988192438"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <MessageCircle size={28} />
          </a>
        </div>

        <p className="text-sm opacity-80">
         <a href="https://elevatechhome.netlify.app/">
           Desenvolvido por <span className="font-semibold text-white">ElevaTech</span>
         </a>
        </p>

      </div>
    </footer>
  )
}

export default Footer
