"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type StaffMember = {
  id: number
  name: string
  position: string
  bio: string
  avatarUrl: string
  category: "owner" | "admin" | "sr_moderator" | "moderator"
}

const staffMembers: StaffMember[] = [
  // Owner
  {
    id: 1,
    name: "Beluga",
    position: "Founder",
    bio: "This is a fan made project and not endorsed by BeluGANG Staff Team",
    avatarUrl:
      "https://media.discordapp.net/attachments/1338434427335999511/1341614193316466699/8302-beluga-pfpsgg.png?ex=67b6a315&is=67b55195&hm=9e49fc95d71410c84100342cdda942591ea437e9e73cd994f0f69a5d631653ee&=&format=webp&quality=lossless",
    category: "owner",
  },
  // Admins
  {
    id: 2,
    name: "TheDiamondRoblox",
    position: "Administrator",
    bio: "",
    avatarUrl:
      "",
    category: "admin",
  },
  {
    id: 3,
    name: "Rand",
    position: "Administrator",
    bio: "",
    avatarUrl:
      "",
    category: "admin",
  },
  {
    id: 4,
    name: "TT",
    position: "Administrator",
    bio: "",
    avatarUrl:
      "",
    category: "admin",
  },
  {
    id: 5,
    name: "Chaos",
    position: "Administrator",
    bio: "",
    avatarUrl:
      "",
    category: "admin",
  },
  // Sr. Moderators
  {
    id: 6,
    name: "Eyos",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "",
    category: "sr_moderator",
  },
  {
    id: 6,
    name: "Hyper",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "",
    category: "moderator",
  },
  {
    id: 7,
    name: "Nameless",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "",
    category: "sr_moderator",
  },
  {
    id: 7,
    name: "Muncher Roblox",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335225276124106772/a_5cca00b88ea462374a01073cbfc90cb0.gif?ex=679f64f1&is=679e1371&hm=c342842dc407a92ccbe8e1a6de6c27e84ccbc393662c7bc54252326aeaf9d6f0&=&width=350&height=350",
    category: "sr_moderator",
  },
   {
    id: 7,
    name: "sadie",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335231840407126067/a8c20eafa87c38477def90bcbba2d951.png?ex=679f6b0e&is=679e198e&hm=ab6098141b8938a9293aca5ea69893de14d214a3f16ad64bcd603084a6e2d4a6&=&format=webp&quality=lossless&width=350&height=350",
    category: "sr_moderator",
  },
  {
    id: 7,
    name: "Chespin",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335228266201616446/3263e6cd32779ef7d9c8d077c54bd67c.png?ex=679f67ba&is=679e163a&hm=2ad749399e0c72db69f945eb117a744f30588e20a9712faa5426a1c01e4f329a&=&format=webp&quality=lossless",
    category: "sr_moderator",
  },
  {
    id: 7,
    name: "Sidney",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335222102802042940/a63016d1a8df859769c75891b0aef660.png?ex=679f61fc&is=679e107c&hm=9cc9d47abcaa86132a9549d56f35ad565e6a121e24ba1ec6c619956a0f80ad7f&=&format=webp&quality=lossless",
    category: "sr_moderator",
  },
  {
    id: 7,
    name: "Ellis",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334843962418139198/a_33e3bf50a6263231804ddcdc376c6e68.gif?ex=679eaa90&is=679d5910&hm=cd4e94034ea9f3069082995271dc6d0e3c3fc7822d67daaac1ff1aa7ea0b1640&=",
    category: "sr_moderator",
  },
  // Moderators
  {
    id: 12,
    name: "Budgie",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334394680841867326/4edb64616440ca579d190bbd96537ea7.png?ex=679f0263&is=679db0e3&hm=d0bc082d0ff087efcbaee3e0b62a43c101cb87b168a80a5a05a2b54cc41d18fb&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 13,
    name: "Darwin",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334394656460378153/71aca646a275df62fdca1c75dfdcadc2.png?ex=679f025d&is=679db0dd&hm=afe334632613b1ffc026df8e678a7652edf67705ec90bec34024bd0c9424779b&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 12,
    name: "Vyy",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334844191758614592/93e5a470f5724d684b2810afd654bff4.png?ex=679eaac7&is=679d5947&hm=c2bf5e269605702012ff2c36a66572f60573ddf4cec98ef2ae436b8a91e18420&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 11,
    name: "Helen",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334844011382313093/3e2fc7a22f8aeb05ee85f3988ebd969f.png?ex=679eaa9c&is=679d591c&hm=27337e499175aedf58d4b07989cac4f468b2f08da9dbcd62175560fa2478b322&=&format=webp&quality=lossless&width=799&height=799",
    category: "moderator",
  },
  {
    id: 12,
    name: "Hiro",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330774197814951968/1335114458334232636/f05e41c157c45090b64938e617e948ed.png?ex=679efdbc&is=679dac3c&hm=3f2033bcd05ac72b572b84c54cd46e009d88da894cd1faf1c89888cab6fbe343&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 13,
    name: "Alpha",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330774197814951968/1335115235706667018/0a11770c7dd9e448da666298215483cb.png?ex=679efe75&is=679dacf5&hm=fb468ab570ca7d7affe714ea66d07d3838477a7a8b02da2637d6c02c2c44524f&=&format=webp&quality=lossless&width=350&height=350",
    category: "moderator",
  },
  {
    id: 14,
    name: "Bones",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330774197814951968/1335114459378618378/90d7c275721d57933bf6fdf352fe4a56.png?ex=679efdbc&is=679dac3c&hm=cc4568c2f03bf95e1c39a521327e7d1a34e909bf664283d198c8e857ea46b351&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 14,
    name: "Gabriel",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335222103317807104/c0510a43944ef2a562ff8f115ca25ffe.png?ex=679f61fc&is=679e107c&hm=1aff19b9eea50df9beee3626a5bf8f6aa8569a29a57de51d13f88e89f5fd4fdf&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 14,
    name: "Momo",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335224828680212481/6f8e213b4bb3d844b6c20b20b985c60b.png?ex=679f6486&is=679e1306&hm=734ae4560f4f725cf68c3b5118cf065f75a115678e3271278bc824b609568d7d&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 14,
    name: "Yo Cat",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335226213786058823/d580a5f505a32dfd91c864b4fbc82bd2.png?ex=679f65d0&is=679e1450&hm=2c928247a2b504147a9ae534d73c9323e4df761c8c808a537a22c4f6adf34ddd&=&format=webp&quality=lossless&width=799&height=799",
    category: "moderator",
  },
  {
    id: 14,
    name: "padme fish",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335226217225519246/90d7a793ee521190b765fc9ef31708fd-2.png?ex=679f65d1&is=679e1451&hm=2a90fb6c492468d3d8607c84075079448e760c27513df8292f7504268f5d813e&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 14,
    name: "Han solo",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335226896312434749/cc22c2b41b9a9fce25c8f2adb4f0176b.png?ex=679f6673&is=679e14f3&hm=1b2e36808ca8baba6741781c8fbe14a8c0a13b966f7dbb78879e591aaff69c6d&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 14,
    name: "Cold",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335227447343321110/a_3a725be1538a722b21c1184f34aaebdc.gif?ex=679f66f6&is=679e1576&hm=811b40e2d5caab5171974031dfdd7c3a862441b2106f5f29c04a5aa7825800c9&=",
    category: "moderator",
  },
  {
    id: 14,
    name: "AngleTwo",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335292261193351239/d34632bbbb0249e45c5d81357043730b.png?ex=679fa353&is=679e51d3&hm=2559f62c053d3627d405413166a266de771b06b014de0f52fed0620a2410fc2b&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 14,
    name: "Shadowstar",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335293425721016431/fe566cf7268b2c1711ca94984643a6e3.png?ex=679fa469&is=679e52e9&hm=385460d40aa1bf75bf3a8880728827d73e466734328f918cb2a7fe7c57bf7f82&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 14,
    name: "Zalix",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335291376086155386/a_8a33bc10b5b70accee6d995835ab5804.gif?ex=679fa280&is=679e5100&hm=a9c0007a6be9a131231e3c38c75bd67ac5cde8db15a560f3eb166af1ddbc1d55&=",
    category: "moderator",
  },
  {
    id: 14,
    name: "Rambo",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335291405559398430/7e183e470635a4e733e9611e103140ae.png?ex=679fa287&is=679e5107&hm=69cfda2dbfa095571d570d864d9869fa785fa0d4b1513d026aa63473f3cda16a&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 14,
    name: "Grim Reaper",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1335291428884058255/8a46d1ee22fd7610aa051558dc8a0585.png?ex=679fa28d&is=679e510d&hm=3b6bb772be8585b5fe59b28f200faac2d2a15c9a0f9e169a1de4c93437c94cdd&=&format=webp&quality=lossless",
    category: "moderator",
  },
]

const categoryOrder = ["owner", "admin", "sr_moderator", "moderator"] as const
const categoryTitles = {
  owner: "Owner",
  admin: "Admins",
  sr_moderator: "Sr. Moderators",
  moderator: "Moderators",
}

export function StaffProfiles() {
  const groupedStaff = staffMembers.reduce(
    (acc, member) => {
      if (!acc[member.category]) {
        acc[member.category] = []
      }
      acc[member.category].push(member)
      return acc
    },
    {} as Record<StaffMember["category"], StaffMember[]>,
  )

  return (
    <>
      <style jsx global>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">BeluGANG Staff</h2>
        {categoryOrder.map((category) => {
          const members = groupedStaff[category]
          if (!members || members.length === 0) return null

          return (
            <div key={category} className="mb-12">
              <h3 className="text-3xl font-semibold mb-6 text-gray-300">{categoryTitles[category]}</h3>
              <div
                className={`grid gap-6 ${
                  category === "owner"
                    ? "grid-cols-1"
                    : category === "admin"
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {members.map((member) => (
                  <Card
                    key={member.id}
                    className={`bg-gray-800 text-white rounded-xl transition-all duration-300 ease-in-out ${
                      category === "owner"
                        ? "hover:shadow-md hover:shadow-gray-700/30 hover:scale-102"
                        : "hover:shadow-lg hover:shadow-gray-700/50 hover:scale-105"
                    } group`}
                  >
                    <CardHeader className="text-center pb-2">
                      <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-gray-300 transition-all duration-300 group-hover:ring-4">
                        <AvatarImage src={member.avatarUrl} alt={member.name} />
                        <AvatarFallback className="bg-gray-600 text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                        {member.name}
                      </CardTitle>
                      <p className="text-sm text-gray-300 group-hover:text-gray-400 transition-colors duration-300">
                        {member.position}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

