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
    bio: "This is a fan made project and not endorsed by BeluGANG staff team",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334391345967534130/f3942f3d1e7dcd7d1d1b82982072c57c.png?ex=679c5c48&is=679b0ac8&hm=dff3b44e178a231e623ed240e25d6a29ea6a65f9239f8700a3a9605c478d64a8&=&format=webp&quality=lossless",
    category: "owner",
  },
  // Admins
  {
    id: 2,
    name: "TheDiamondRoblox",
    position: "Administrator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334388350357995541/c768fa061aa092005f2d9f14c5ec33b1.png?ex=679c597e&is=679b07fe&hm=ab4b96bde9b045c77003748257c09db4121d5f82b3d6074bc4f25789a33f660d&=&format=webp&quality=lossless",
    category: "admin",
  },
  {
    id: 3,
    name: "Rand",
    position: "Administrator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334389180134068224/a_3c11ed6215d589fd0c17ecb35728c33c.gif?ex=679c5a44&is=679b08c4&hm=fdb9b6f493cd0ade5989991acbdf2ead8911fd1d9dd12a3060abea46b58fc0a1&=",
    category: "admin",
  },
  {
    id: 4,
    name: "TT",
    position: "Administrator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334389785921458176/10862d4f41f2cb15e81326ecc3590c96.png?ex=679c5ad4&is=679b0954&hm=02b75557a6755d37036d035aca4c199d377fcb5fa82b24c2beb8d271ac1a9632&=&format=webp&quality=lossless",
    category: "admin",
  },
  {
    id: 5,
    name: "Chaos",
    position: "Administrator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334390102373171283/54f99565617da6d672954cef750fe60d.png?ex=679c5b20&is=679b09a0&hm=a444e9e6c2e156013574c4f070aa5be00e29e22ef2b7949a738a0f178f759448&=&format=webp&quality=lossless",
    category: "admin",
  },
  // Sr. Moderators
  {
    id: 6,
    name: "Eyos",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334394054267637782/e666e8b695a7d2a0413e0c49d8fb8d1a.png?ex=679c5ece&is=679b0d4e&hm=7b84730e922696e42706e23d4f2996cb8e7bf93e1056ae63a51322ad10dacf73&=&format=webp&quality=lossless&width=350&height=350",
    category: "sr_moderator",
  },
  {
    id: 6,
    name: "Hyper",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330774197814951968/1335114458653134888/a_7d3007d4c139c82d3ae1d89888467c79.gif?ex=679efdbc&is=679dac3c&hm=bc7fbcdaf8a7df923f2654e8a27dc3c71ff54a0bc7ef51b8824ba0471e3f0218&=",
    category: "moderator",
  },
  {
    id: 7,
    name: "Nameless",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334394063860011089/c6d82c2d4833270fe42574b6ba6dfe75.png?ex=679c5ed0&is=679b0d50&hm=6f0e4380e6ead6a03a05dd40387a406c510582b89c6a00b0922ce2680af818f2&=&format=webp&quality=lossless",
    category: "sr_moderator",
  },
  {
    id: 7,
    name: "Ellis",
    position: "Senior Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334843962418139198/a_33e3bf50a6263231804ddcdc376c6e68.gif?ex=679e01d0&is=679cb050&hm=2c84c42aab707d7755d1b80429d6ef71999b9cb60e21c9264f497ac95894f08c&=",
    category: "sr_moderator",
  },
  // Moderators
  {
    id: 12,
    name: "Budgie",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334394680841867326/4edb64616440ca579d190bbd96537ea7.png?ex=679c5f63&is=679b0de3&hm=2f761c02a0c194dfb277fdbfca899b7a051920e78262b5ed300e6bec3f96ca2b&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 13,
    name: "Darwin",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334394656460378153/71aca646a275df62fdca1c75dfdcadc2.png?ex=679c5f5d&is=679b0ddd&hm=85d9352d1157085ede92c5d8ed4c6c126332638dcf9ebf4070ab255fc6bf93af&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 12,
    name: "Vyy",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334844191758614592/93e5a470f5724d684b2810afd654bff4.png?ex=679e0207&is=679cb087&hm=3584e2407e689b4afa38a871b3be3fd0e6032375c7717ae4e1be1d2dcdd42afc&=&format=webp&quality=lossless",
    category: "moderator",
  },
  {
    id: 11,
    name: "Helen",
    position: "Moderator",
    bio: "",
    avatarUrl:
      "https://media.discordapp.net/attachments/1330941608912228413/1334844011382313093/3e2fc7a22f8aeb05ee85f3988ebd969f.png?ex=679e01dc&is=679cb05c&hm=25f30573006fec2046bac33654d9d2770b6bdd882249852bf655194e4aa4c49c&=&format=webp&quality=lossless&width=799&height=799",
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

