export default function Footer({}){
  return <footer className="bg-blue-dark py-16 text-white">
    <div className="max-w-screen-xl mx-auto">
    <h2 className="sr-only">Footer</h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
      <div>
        <h3 className="text-lg font-bold mb-6">About the Library</h3>
        <ul className="space-y-2">
          <li><a href="#">Jobs at the Library</a></li>
          <li><a href="#">Doing Business with the Library</a></li>
          <li><a href="#">Vision, Mission & Values</a></li>
          <li><a href="#">Customer Feedback Standards & Practices</a></li>
          <li><a href="#">History of the Library</a></li>
          <li><a href="#">Library Board</a></li>
          <li><a href="#">Advisory Councils</a></li>
          <li><a href="#">Strategic Plans, Annual Reports & Statistics</a></li>
          <li><a href="#">Service Plans, Strategies, Frameworks & Reports</a></li>
          <li><a href="#">Library Finance</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6">Blogs, Podcasts & Publications</h3>
        <ul className="space-y-2">
          <li><a href="#">Local History Publications</a></li>
          <li><a href="#">What's On Publications</a></li>
          <li><a href="#">Young Voices Magazine</a></li>
          <li><a href="#">Open Data & Feeds</a></li>
        </ul>

        <h3 className="text-lg font-bold mt-8 mb-6">Library Policies & Terms of Use</h3>
        <ul className="space-y-2">
          <li><a href="#">Online Privacy & Access to Information</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6">Media Relations & News Releases</h3>
        <ul className="space-y-2">
          <li><a href="#">Media Contacts</a></li>
          <li><a href="#">City Librarian Updates</a></li>
        </ul>


        <h3 className="text-lg font-bold mt-8 mb-6">Accessibility</h3>
        <ul className="space-y-2">
          <li><a href="#">Accessibility at Library Branches</a></li>
          <li><a href="#">Services for People with Disabilities</a></li>
          <li><a href="#">Accessible Collections</a></li>
          <li><a href="#">Website Accessibility</a></li>
          <li><a href="#">TTY Service</a></li>
        </ul>

      </div>

      <div>
        <h3 className="text-lg font-bold mb-6">Support Your Library</h3>
        <ul className="space-y-2">
          <li><a href="#">TPL Foundation</a></li>
          <li><a href="#">Friends of the Library</a></li>
          <li><a href="#">Volunteering</a></li>
          <li><a href="#">Book Sales</a></li>
          <li><a href="#">Donate Books to the Library</a></li>
          <li><a href="#">Donate Now</a></li>
        </ul>
      </div>

    </div>
    </div>

  </footer>

}