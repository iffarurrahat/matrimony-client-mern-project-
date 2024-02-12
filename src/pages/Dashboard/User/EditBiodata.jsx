import { useState } from "react";
import EditBiodataForm from "../../../components/Form/EditBiodataForm/EditBiodataForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import { addCandidate } from "../../../api/candidate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditBiodata = () => {

    const navigate = useNavigate();
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const handelSubmit = async event => {
        setLoading(true);
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const image = form.image.files[0];
        const fatherName = form.father.value;
        const motherName = form.mother.value;
        const birthDate = form.birth.value;
        const candidateHeight = form.height.value;
        const candidateWeight = form.weight.value;
        const candidateAge = form.age.value;
        const occupation = form.occupation.value;
        const race = form.race.value;
        const gender = form.gender.value;
        const permanentAddress = form.permanent.value;
        const presentAddress = form.present.value;
        const phone = form.phone.value;
        const expectedPartnerHeight = form.expectedHeight.value;
        const expectedPartnerWeight = form.expectedWeight.value;
        const expectedPartnerAge = form.expectedAge.value;

        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }
        const image_url = await imageUpload(image);

        const candidateInfo = {
            name,
            image: image_url?.data?.display_url,
            fatherName,
            motherName,
            birthDate,
            candidateHeight,
            candidateWeight,
            candidateAge,
            occupation,
            race,
            gender,
            permanentAddress,
            presentAddress,
            phone,
            expectedPartnerHeight,
            expectedPartnerWeight,
            expectedPartnerAge,
            host
        }

        try {
            const data = await addCandidate(candidateInfo);
            console.log(data);
            setUploadButtonText('Uploaded!');
            toast.success('Your Profile Added!');
            navigate('/dashboard/view-biodata')
        }
        catch (err) {
            console.log(err.message);
            toast.error(err.message)
        }
        finally {
            setLoading(false);
        }

    }


    // Handle Image button text
    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <>
            <EditBiodataForm
                handelSubmit={handelSubmit}
                uploadButtonText={uploadButtonText}
                handleImageChange={handleImageChange}
                loading={loading} />
        </>
    );
};

export default EditBiodata;