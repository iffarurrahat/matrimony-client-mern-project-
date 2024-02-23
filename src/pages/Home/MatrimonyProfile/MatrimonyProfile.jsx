import { useEffect, useState } from "react";
import Container from "../../../components/ui/Container";
import Card from "./Card";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";
import { getAllCandidates } from "../../../api/candidate";

const MatrimonyProfile = () => {
    
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        getAllCandidates()
            .then(data => {
                setProfiles(data)
            })
    }, [])

    return (
        <div className="mt-10 md:mt-20">
            <Container>
                <HeaderTitle
                    title={'CANDIDATE'}
                    subTitle={'Chose Right Person'} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {
                        profiles.slice(0, 6).map(profile => <Card
                            key={profile._id}
                            profile={profile}
                        />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default MatrimonyProfile;