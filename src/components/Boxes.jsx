

const Boxes = () => {
    return (
        <section className="bg-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Subscription Boxes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {/* Adobe Creative Cloud */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://img.freepik.com/free-photo/abstract-colorful-3d-shape-graphics-as-label-template-generative-ai_191095-927.jpg?ga=GA1.1.110764215.1723834094&semt=ais_hybrid&w=740"
                alt="Adobe Creative Cloud"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Adobe Creative Cloud</h3>
              <p className="text-gray-600 mb-2">All Adobe apps including Photoshop, Illustrator, Premiere Pro, and more in one package for creatives.</p>
              <ul className="text-left text-sm text-gray-700 mb-3 list-disc list-inside">
                <li>Access to 20+ Adobe apps</li>
                <li>100GB cloud storage</li>
                <li>Portfolio website & Adobe Fonts</li>
                <li>Cross-platform sync</li>
              </ul>
              <p className="text-secondary font-medium">Price: $52.99 / Monthly</p>
            </div>
  
            {/* GitHub Copilot */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub Copilot"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">GitHub Copilot</h3>
              <p className="text-gray-600 mb-2">AI-powered coding assistant developed by GitHub and OpenAI to accelerate code completion.</p>
              <ul className="text-left text-sm text-gray-700 mb-3 list-disc list-inside">
                <li>Context-aware code suggestions</li>
                <li>Support for multiple programming languages</li>
                <li>Visual Studio Code and JetBrains plugin</li>
                <li>Trained on billions of lines of code</li>
              </ul>
              <p className="text-secondary font-medium">Price: $10.00 / Monthly</p>
            </div>
  
            {/* Figma Professional */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://img.freepik.com/free-vector/businessman-show-chart-report-screen-man-woman-office-worker_81522-2688.jpg?ga=GA1.1.110764215.1723834094&semt=ais_hybrid&w=740"
                alt="Figma Professional"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Figma Professional</h3>
              <p className="text-gray-600 mb-2">Powerful collaborative interface design tool for teams and professionals.</p>
              <ul className="text-left text-sm text-gray-700 mb-3 list-disc list-inside">
                <li>Unlimited version history</li>
                <li>Team libraries and shared fonts</li>
                <li>Real-time collaboration</li>
                <li>Design + Prototype + Comment</li>
              </ul>
              <p className="text-secondary font-medium">Price: $12.00 / Monthly</p>
            </div>
  
            {/* Notion Plus */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                alt="Notion Plus"
                className="rounded-lg mb-4 w-full h-48 object-contain bg-white"
              />
              <h3 className="text-xl font-semibold mb-2">Notion Plus</h3>
              <p className="text-gray-600 mb-2">All-in-one productivity workspace for notes, tasks, databases, and team collaboration.</p>
              <ul className="text-left text-sm text-gray-700 mb-3 list-disc list-inside">
                <li>Unlimited blocks for teams</li>
                <li>Advanced permissions</li>
                <li>Version history (30 days)</li>
                <li>API access and integrations</li>
              </ul>
              <p className="text-secondary font-medium">Price: $8.00 / Monthly</p>
            </div>
  
            {/* JetBrains All Products Pack */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg"
                alt="JetBrains All Products Pack"
                className="rounded-lg mb-4 w-full h-48 object-contain bg-white"
              />
              <h3 className="text-xl font-semibold mb-2">JetBrains All Products Pack</h3>
              <p className="text-gray-600 mb-2">Full suite of JetBrains IDEs including IntelliJ IDEA, PyCharm, WebStorm, and more.</p>
              <ul className="text-left text-sm text-gray-700 mb-3 list-disc list-inside">
                <li>Access to 15+ developer tools</li>
                <li>Toolbox App integration</li>
                <li>Cross-platform compatibility</li>
                <li>Intelligent code analysis and refactoring</li>
              </ul>
              <p className="text-secondary font-medium">Price: $24.90 / Monthly</p>
            </div>
  
            {/* Canva Pro */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://img.freepik.com/free-vector/flat-woman-taking-photos-plant_23-2149012405.jpg?ga=GA1.1.110764215.1723834094&semt=ais_hybrid&w=740"
                alt="Canva Pro"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Canva Pro</h3>
              <p className="text-gray-600 mb-2">Online design platform with premium templates, branding tools, and collaboration features.</p>
              <ul className="text-left text-sm text-gray-700 mb-3 list-disc list-inside">
                <li>Brand kit and Magic Resize</li>
                <li>Premium templates and assets</li>
                <li>Team collaboration tools</li>
                <li>Unlimited folders and storage</li>
              </ul>
              <p className="text-secondary font-medium">Price: $14.99 / Monthly</p>
            </div>
  
          </div>
        </div>
      </section>
    );
};

export default Boxes;