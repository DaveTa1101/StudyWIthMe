const users = require("../models/users");
const courses = require("../models/courses");
const news = require("../models/news");
const projects = require("../models/projects");
const lectures = require("../models/lectures");

const {
	hashPassword,
	comparePassword,
	generateToken,
	verifyToken,
} = require("../utils/utility");

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
		console.log("username", username, "email", email, "password", password);
        if (!username || !password || !email) {
            return res.json({ message: 'Please fill in all fields' });
        }
        // Check if password is less than 6 characters
        if (password.length < 6) {
            return res.json({
                message: 'Password must be at least 6 characters',
            });
        }
        // Check if user already exists
        const exists = await users.findOne({ email });
        if (exists) {
            return res.json({ message: 'User already exists' });
        }
        // Hash password
        const hashedPassword = await hashPassword(password);
        // Create new user
        const user = new users({
			username,
			email,
			password: hashedPassword,
		});
		// Save user
		await user.save();

        // Send user to client
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const login = async (req, res) => {
	const { email, password } = req.body;
    console.log(req.body);
	// Validate email and password presence
	if (!email || !password) {
		return res
			.status(400)
			.json({ message: "Please provide email and password" });
	}

	try {
		// Find user with provided email
		const user = await users.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Compare provided password with stored hashed password
		const isMatch = await comparePassword(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Generate JWT token
		const token = generateToken(user);
		
		// Respond with token
		res.status(200).json({ token });
	} catch (error) {
        console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

const logout = async (req, res) => {
	res.status(200).json({ message: "Logout successful" });
};

const forgotPassword = async (req, res) => {
	const { email } = req.body;
	try {
		const user = await users.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const token = generateToken(user);
		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const resetPassword = async (req, res) => {
	
	try {
        const { token, password } = req.body;
		if (!token) {
			return res.status(400).json({ message: "Invalid token" });
		}

		const { id } = verifyToken(token);
		const user = await users.findById(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const hashPassword = await hassPassword(password);
		await users.findByIdAndUpdate(id, { password: hashPassword });
		res.status(200).json({ message: "Password reset successful" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getCourses = async (req, res) => {
	try {
		const course = await courses.find({});
		res.status(200).json({ course });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getInformations = async (req, res) => {
	try {
		const lecture = await lectures.find({});
		res.status(200).json({ lecture });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getNews = async (req, res) => {
	try {
		const newsData = await news.find({});
		res.status(200).json({ news: newsData });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getProjects = async (req, res) => {
	try {
		const projectData = await projects.find({});
		res.status(200).json({ project: projectData });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	login,
	signup,
	logout,
	forgotPassword,
	resetPassword,
	getCourses,
	getInformations,
	getNews,
	getProjects,
};
