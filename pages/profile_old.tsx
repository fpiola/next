
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';

type Profile = {
    name: string;
    bio: string;
}

type ProfileProps = {
    profile: Profile;
}

export default function Profile( {profile} : ProfileProps) {

    return (
        <div>
            <h1>Repositories</h1>
            <p>Nome: {profile.name}</p>
            <p>Bio: {profile.bio}</p>
        </div>
    )
}

/*
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
*/

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api.github.com/users/fpiola')
    const data = await response.json()
    return {
        props: {
            profile: data
        },
        revalidate: 10, 
    }
}