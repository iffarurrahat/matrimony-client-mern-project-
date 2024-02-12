import { useLoaderData } from "react-router-dom";
import Container from "../ui/Container";
import SimpleCart from "./SimpleCart";
import { Helmet } from "react-helmet-async";
import useRole from "../../hooks/useRole";
import { useEffect, useState } from "react";
import { getAllCandidates } from "../../api/candidate";
import Spinner from "../Spinner/Spinner";
import Card from "../../pages/Home/MatrimonyProfile/Card";

const ProfileCardDetails = () => {

    const [loading, setLoading] = useState(false);

    const candidate = useLoaderData();
    const { birthDate, candidateAge, candidateHeight, candidateWeight, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, gender, image, fatherName, motherName, name, occupation, phone, presentAddress, permanentAddress, race, host } = candidate || {}
    const [role] = useRole();

    const [males, setMales] = useState([])
    const [females, setFemales] = useState([])

    useEffect(() => {
        setLoading(true);
        getAllCandidates()
            .then(data => {
                if (data) {
                    const maleFiltered = data.filter(item => item.gender === 'male')
                    setMales(maleFiltered)
                }
                else {
                    const femaleFiltered = data.filter(item => item.gender === 'female')
                    setFemales(femaleFiltered);
                }
                setLoading(false);
            })
    }, [])


    if (loading) return <Spinner />

    return (
        <>
            <Helmet>
                <title>{name} Full Information</title>
            </Helmet>
            <Container>
                <div className="mt-12 md:mt-24 font-inter">
                    <div className="md:flex gap-6">
                        <div className="md:w-2/5 py-10">
                            <SimpleCart image={image} name={name} occupation={occupation} birthDate={birthDate} candidateAge={candidateAge} race={race} />
                            {
                                role === "premium-user" ?
                                    <div className="capitalize space-y-1 mt-5">
                                        <p>Phone: {phone}</p>
                                        <p>Email: {host.email}</p>
                                    </div>
                                    :
                                    <div className="space-y-1 mt-5 text-sm bg-gray-200 p-3 border-l-4 border-quaternary">
                                        <p className="font-bold">If you the see phone & email then you must be get premium</p>
                                        <p>Phone: Only premium member can see</p>
                                        <p>Email: Only premium member can see</p>
                                    </div>
                            }

                            <div className="md:flex gap-20 mt-5">
                                <div className="capitalize space-y-1">
                                    <p>Gender: {gender}</p>
                                    <p>height: {candidateHeight}</p>
                                    <p>weight: {candidateWeight} kg</p>
                                </div>
                                <div className="capitalize space-y-1 mt-5 md:mt-0">
                                    <p>Expected Partner Age: {expectedPartnerAge} years</p>
                                    <p>Expected Partner Height: {expectedPartnerHeight}</p>
                                    <p>Expected Partner Weight: {expectedPartnerWeight} kg</p>
                                </div>
                            </div>
                            <div className="capitalize space-y-1 mt-5">
                                <p>Father' name: {fatherName} kg</p>
                                <p>Mother' name: {motherName} kg</p>
                                <p>Current: {presentAddress}</p>
                                <p>Permanent: {permanentAddress}</p>
                            </div>
                        </div>
                        <div className="md:w-3/5 py-10 overflow-y-scroll">
                            {
                                gender === 'male' ?
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {
                                            males?.map((profile, idx) => <Card key={idx} profile={profile} />)
                                        }
                                    </div>
                                    :
                                    <div>
                                        {
                                            females?.map(female => setFemales(female))
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ProfileCardDetails;