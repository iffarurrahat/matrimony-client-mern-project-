import { useState } from "react";
import EditBiodataForm from "../../Form/EditBiodataForm/EditBiodataForm";
import HeaderTitle from "../../HeaderTitle/HeaderTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import axiosSecure from "../../../api/axiosSecure";

const UpdateCandidateInfo = () => {

    const infoData = useLoaderData();

    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    // Handle Image button text
    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

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

        if (!image) {
            toast.error('image not found, please upload your image!!')
            return;
        }
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }

        const image_url = await imageUpload(image);


        const updateData = {
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
            const data = await axiosSecure.put(`/candidate/${infoData._id}`, updateData);
            setUploadButtonText('Uploaded!');
            toast.success('Your information updated!');
            navigate('/dashboard/view-biodata')
        }
        catch (err) {
            toast.error(err.message)
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <HeaderTitle title={'Something you want to change'} subTitle={'Update your info'} />
            <EditBiodataForm
                uploadButtonText={uploadButtonText}
                handleImageChange={handleImageChange}
                infoData={infoData}
                handelSubmit={handelSubmit}
                loading={loading}
            />
        </div>
    );
};

export default UpdateCandidateInfo;