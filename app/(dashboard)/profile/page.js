import { fetchUserTokensById } from '@/utils/actions'
import { UserProfile, auth } from '@clerk/nextjs'
export const dynamic = 'force-dynamic'


const UserProfilePage = async () => {
  const { userId } = auth()
  const currentTokens = await fetchUserTokensById(userId)
  
  return (
    <div>
      <h2 className="mb-8 ml-8 text-xl font-extrabold">
        Token Amount : {currentTokens}
      </h2>
      <UserProfile />
    </div>
  )
};

export default UserProfilePage;