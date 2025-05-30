import Image from "next/image"

interface TeamMemberProps {
  member: {
    name: string
    role: string
    image: string
    bio?: string
  }
  showBio?: boolean
}

export default function TeamMember({ member, showBio = false }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-primary text-sm font-medium">{member.role}</p>
      {showBio && member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
    </div>
  )
}
