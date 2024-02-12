import axiosSecure from "./axiosSecure";

// Get token form server
export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', { email })
    console.log('Token received form server---->', data);
    return data;
}

// Clear token form browser
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout');
    return data;
}


// save user data in database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'user',
        status: 'Verified'
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data;
}

// Get user role
export const getRole = async (email) => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.role;
}

// get all users
export const getAllUsers = async () => {
    const { data } = await axiosSecure('/users')
    return data
}


// save user data in database
export const updateRole = async ({ email, role }) => {
    const currentUser = {
        email,
        role,
        status: 'Verified'
    }

    const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser)
    return data;
}


// Become a premium
export const becomePremiumMember = async (email) => {
    const currentUser = {
        email,
        status: "Requested",
    }

    const { data } = await axiosSecure.put(`/users/${email}`, currentUser)
    return data;
}