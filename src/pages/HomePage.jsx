"use client"

import { Target, Eye, Award, Cpu, ChevronRight } from "lucide-react"
import Spline from "@splinetool/react-spline"

const HomePage = () => {

  const contentBoxes = [
    {
      id: 1,
      title: "Our Vision",
      icon: Eye,
      content:
        "To lead in autonomous robotics and drone technology by creating innovative solutions that advance precision engineering.",
      position: "top-left",
    },
    {
      id: 2,
      title: "Our Mission",
      icon: Target,
      content:
        "Foster innovation through hands-on learning, collaborative projects, and cutting-edge research that prepares the next generation of engineers.",
      position: "top-right",
    },
    {
      id: 3,
      title: "Innovation Hub",
      icon: Cpu,
      content:
        "State-of-the-art facilities equipped with the latest tools for prototyping, testing, and developing next-generation robotic systems.",
      position: "bottom-left",
    },
    {
      id: 4,
      title: "Excellence",
      icon: Award,
      content:
        "Committed to achieving the highest standards in design, engineering, and performance across all our projects and competitions.",
      position: "bottom-right",
    },
  ]

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "absolute top-15 left-5 max-w-md"
      case "top-right":
        return "absolute top-15 right-5 max-w-md"
      case "bottom-left":
        return "absolute bottom-5 left-5 max-w-md"
      case "bottom-right":
        return "absolute bottom-5 right-5 max-w-md"
      default:
        return ""
    }
  }

  return (
    <div>
<div className="h-screen bg-black text-white overflow-hidden relative">

      {/* Spline Drone Component - Full Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/rP-qbmWVVE0G6ecS/scene.splinecode" />
      </div>

      {/* Content Boxes positioned around the drone */}
      {contentBoxes.map((box) => (
        <div key={box.id} className={`${getPositionClasses(box.position)} z-10`}>
          <div className="h-50 bg-black backdrop-blur-xs rounded-2xl p-6 mt-10 border border-gray-700/50 shadow-2xl hover:border-gray-600/50 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mr-4 border border-gray-600 group-hover:from-gray-600 group-hover:to-gray-500 transition-all">
                <box.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">{box.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors ">
              {box.content}
            </p>
          </div>
        </div>
      ))}

      {/* Central Welcome Message */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <div className="bg-black/40 backdrop-blur-xs shadow-2xl rounded-2xl px-8 py-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group cursor-pointer">
          <p className="text-gray-100 text-lg">
            <span className="text-white font-semibold">DRC</span> • Drone & Robotics Club
          </p>
        </div>
      </div>
    </div>
    <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque officia quod, voluptatum, molestiae commodi nostrum saepe vero facilis corporis inventore quidem consequuntur consectetur assumenda natus ea laborum pariatur impedit explicabo voluptas voluptatem vitae. Perspiciatis atque alias voluptate sequi obcaecati architecto necessitatibus, molestias error ipsum. Aperiam, odit! Qui, natus atque. Voluptatibus laborum quod, quibusdam doloremque alias aperiam officiis quam nemo, nisi mollitia accusamus, temporibus consequuntur? Error nesciunt vero, alias vitae nisi, dicta minima repellendus quisquam sunt atque corporis voluptates tenetur molestias? Ipsam facere molestias minima reprehenderit excepturi obcaecati quod maiores, optio expedita ab commodi modi! Ut commodi, alias tenetur ullam distinctio minus rerum eum nam a illo porro quibusdam laudantium minima architecto impedit voluptas, quos ab. Quidem expedita aliquam corporis at nisi minima neque illo deserunt voluptate. Doloremque consectetur illo doloribus iste atque. Nostrum explicabo delectus dolorem ullam soluta provident molestiae recusandae laborum ab in quod sit non dolor amet nesciunt, ex alias illo deleniti! Perspiciatis, quaerat vero expedita magni nesciunt consectetur rem eligendi recusandae quae beatae obcaecati minima dolore, reiciendis quod neque. Quos vel impedit optio sunt magnam pariatur fuga beatae obcaecati vero, quam nihil laudantium deleniti praesentium dicta nemo, voluptatum iure inventore delectus enim molestiae ullam neque. Reprehenderit praesentium aliquam velit similique fuga nostrum quam, corporis voluptate sapiente quaerat voluptatibus aut iusto natus perspiciatis nam veritatis? Ratione voluptatibus odit mollitia error non dolor ipsum natus voluptate dolore praesentium voluptas magni molestiae cumque, dignissimos ipsam. Fuga ullam numquam perferendis non eveniet minus eligendi dicta ex facilis delectus consequuntur, iste sit porro tenetur eius quam cum ipsum sequi eos aliquam voluptatum sunt. A, facilis aut porro nostrum reiciendis rem saepe voluptate unde exercitationem incidunt beatae, perferendis sed quaerat ullam non praesentium molestiae illo voluptatum veritatis! Doloribus hic id minima esse asperiores, nostrum eos consectetur dicta accusantium quasi! Iste incidunt odio voluptatum cumque, officia inventore est, quidem, saepe similique ut placeat nulla dolores tenetur? Enim libero corrupti totam eligendi. Ullam laudantium magnam asperiores! Dignissimos unde aperiam voluptas perferendis, corporis minus, maxime voluptatibus odit fuga sed tenetur, nostrum rerum at doloremque atque cum autem? Adipisci ab ad illum cupiditate natus quo cumque architecto nam. Sequi harum, suscipit veniam, recusandae optio maxime aut excepturi dolorem commodi deleniti, libero sapiente beatae laudantium. Soluta doloremque quasi aliquam placeat nulla nesciunt aut, non deleniti quos unde quibusdam molestias? Autem possimus temporibus, perspiciatis quam omnis quaerat rem corporis aut suscipit. Enim consectetur fugit nobis voluptas placeat perferendis eum suscipit sunt veniam laboriosam ea delectus autem neque sit expedita minima laborum unde, qui nesciunt iusto quam aliquid. Dolorem quo atque iste illum vero voluptate sunt repudiandae omnis neque sequi, ipsa magnam nisi explicabo in amet magni? Eius quo quasi molestias cumque rem. Consequuntur sunt eos ratione commodi facilis odit vero repellendus minus nemo, reprehenderit veniam impedit nesciunt saepe nisi iste, repellat maxime facere? Inventore provident tempore aut iste quasi. Ipsum ullam praesentium omnis esse earum minima. Cumque, fugiat sunt nam harum, eum ipsum similique vitae esse perspiciatis, optio aliquid. Vero corrupti laborum blanditiis in fuga consequatur ab facilis voluptatum quibusdam dolore? Non ab, odit assumenda saepe recusandae voluptatem accusantium dolorem possimus nobis cum delectus aliquid iure sed. In dolorem obcaecati, animi illum fugit officiis harum asperiores deleniti assumenda dolore reprehenderit voluptatum perferendis, omnis dicta maiores suscipit nobis. Illo, similique repellendus. Sed enim molestias adipisci ab, cumque vitae iure et dolores fugiat commodi quam magni alias. Explicabo maiores vel debitis! Voluptatem aspernatur ea in eligendi quo, nesciunt sint vel animi. Sapiente libero, magnam possimus asperiores veniam aliquid quos cumque hic. Unde, atque quisquam assumenda molestias quo delectus, consectetur labore aperiam provident nobis vero pariatur minima praesentium adipisci doloremque recusandae non deleniti reiciendis! Dolores modi cupiditate ut eius cumque dolor, impedit quos autem error nulla officiis possimus aperiam saepe velit deleniti distinctio voluptate repellat aut. Quas repudiandae amet sequi repellat quisquam unde quasi perferendis enim eius temporibus sint cumque excepturi molestiae, recusandae, atque consectetur quia. Aperiam laborum suscipit aspernatur ducimus culpa ea minima dolor eum maiores fuga! Sapiente, repellat vitae! Iusto magnam itaque incidunt amet cum consequuntur dolores aperiam deleniti voluptatem veniam libero maiores id porro animi dolore, repellendus sequi cupiditate. Molestias nisi pariatur aliquam dolor beatae temporibus, sequi aspernatur illum minus error nulla debitis perferendis ducimus. Nisi exercitationem fuga temporibus esse libero! Optio mollitia corporis accusamus, architecto expedita temporibus vero. Vero nobis similique incidunt nesciunt, ipsa illum, minus quod necessitatibus culpa ad aut numquam, officiis facere totam. At illo sit esse fuga natus itaque maiores officia quod eos, libero, corporis molestias pariatur similique unde culpa repellendus ut vitae. Officia ea esse modi illum? Nihil, neque voluptas repellendus nulla nemo totam libero dolore non, obcaecati inventore cum impedit quibusdam eligendi distinctio placeat, esse reprehenderit odit eaque quisquam! Ducimus temporibus exercitationem incidunt? Amet ullam tempora labore nesciunt deleniti. Odio eum aperiam iste quo nihil. Officia, incidunt minus officiis facere nulla ipsum voluptates ex mollitia deserunt similique aut expedita id maxime ducimus quibusdam debitis. Doloremque alias odio enim quam debitis quasi explicabo ab aperiam delectus ipsam? Sapiente voluptatum consectetur voluptatibus dignissimos provident unde quas molestiae esse a voluptas, sequi, deleniti error modi odit magni! Quisquam voluptatibus, dolore exercitationem laboriosam ducimus totam molestiae natus libero harum veniam iste deserunt maxime tempore sunt corrupti id et! Impedit, odit quam accusantium recusandae aliquid facilis vel animi iusto beatae ducimus vero asperiores modi incidunt quod non voluptate ex ipsam! Porro, mollitia? Illo quas sapiente aliquid ipsam perferendis est recusandae! Quia illum in et accusantium mollitia quasi quas id voluptas repellendus blanditiis eveniet molestiae laboriosam aspernatur consequuntur temporibus excepturi iste, est officia quibusdam facilis deserunt pariatur cupiditate! Nam illum blanditiis, beatae totam placeat nihil error accusamus aspernatur quaerat atque et corrupti officia magni dolorum nulla quam hic, cum, molestias eligendi natus sapiente deleniti! Nobis exercitationem, vero expedita delectus asperiores explicabo? Error numquam voluptates quasi illum deleniti sint? Libero earum, dicta repellat repudiandae tempora corrupti iste veniam quae officia delectus laboriosam nisi minima optio! Cumque ratione quam repellat nam quibusdam et ipsa explicabo nobis magni! Quos placeat dolores qui neque saepe culpa temporibus magnam quia atque ea maiores non aliquid sequi deserunt libero cumque repellendus cupiditate, quidem necessitatibus natus maxime quis illum quo optio. Est temporibus unde, suscipit officia quia incidunt eaque sed optio autem vitae iste neque ad recusandae quisquam? Voluptatibus aliquam consequuntur nesciunt rem autem, quisquam quae. Perspiciatis ut voluptate velit fugit voluptatibus, laudantium dignissimos repudiandae voluptatem nemo cum nobis, a vero autem culpa ipsum doloremque iste quas perferendis. Aut deleniti quidem sunt cum voluptatum consequatur molestias porro dolor, voluptate voluptates eos nesciunt natus, officia, officiis perferendis facilis delectus et nemo rerum perspiciatis aliquid adipisci animi! Est, adipisci ad. Velit nam, autem a facere minus perspiciatis aliquid provident perferendis fugit, maxime dolore qui possimus deserunt, aperiam ratione officia. Dolorem omnis quod quia fugiat laudantium odio amet autem aperiam voluptatibus, enim at perspiciatis ab sapiente modi quis illo cupiditate. Perspiciatis, cumque? Recusandae provident facere officia ut harum unde assumenda modi ea eum? Explicabo nam culpa ex laborum ut nobis quod itaque a iure soluta, beatae nihil quia voluptas est blanditiis aperiam exercitationem quasi quibusdam suscipit, temporibus debitis. Beatae, itaque. Nobis pariatur, harum repudiandae esse facilis voluptas commodi minima possimus, neque ad explicabo quibusdam aut delectus dolor, numquam placeat nulla nihil impedit expedita ut voluptatem. Tenetur impedit facere voluptatem aliquid! Dolorum consequatur exercitationem rem illum eius distinctio excepturi corporis quos vel quisquam vero tempore temporibus accusantium doloribus, nostrum ipsam dolor iure amet culpa nesciunt fugiat in debitis minus. Blanditiis voluptatem illum eum!</div>
    </div>
    
  )
}

export default HomePage
