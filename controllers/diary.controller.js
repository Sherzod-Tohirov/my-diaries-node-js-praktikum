const db = require("../models/index");
const Diary = db.diary;

const diaries = [
  {
    id: 1,
    title: "My First Day at Work",
    date: new Date("2024-01-15"),
    excerpt:
      "Today was my first day at the new job. It was both exciting and nerve-wracking...",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  },
  {
    id: 2,
    title: "Weekend Trip to the Mountains",
    date: new Date("2024-01-20"),
    excerpt: "Spent an amazing weekend hiking in the mountains with friends...",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  },
  {
    id: 3,
    title: "Learning to Cook Italian",
    date: new Date("2024-01-25"),
    excerpt:
      "Started my Italian cooking journey today with a classic pasta recipe...",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  },
  {
    id: 4,
    title: "Family Reunion",
    date: new Date("2024-02-01"),
    excerpt:
      "After two years, finally had a chance to meet all my relatives...",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
  },
  {
    id: 5,
    title: "New Photography Project",
    date: new Date("2024-02-05"),
    excerpt:
      "Started a new photography project capturing city life at night...",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 6,
    title: "Book Club Meeting",
    date: new Date("2024-02-10"),
    excerpt:
      "Had an interesting discussion about the latest bestseller at our monthly book club...",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    id: 7,
    title: "Garden Makeover",
    date: new Date("2024-02-15"),
    excerpt: "Finally started working on my backyard garden project...",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  },
  {
    id: 8,
    title: "Music Festival Experience",
    date: new Date("2024-02-20"),
    excerpt:
      "Attended my first music festival of the year. The atmosphere was electric...",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
  },
  {
    id: 9,
    title: "Learning JavaScript",
    date: new Date("2024-02-25"),
    excerpt: "Made significant progress in my JavaScript course today...",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 10,
    title: "Beach Day",
    date: new Date("2024-03-01"),
    excerpt: "Perfect weather for a day at the beach with family...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

// Description: Diary controller to render diary page.
// Route: /
// Access: Private
const getMyDiary = async (req, res) => {
  const data = await Diary.findAll({
    order: [["createdAt", "DESC"]],
    raw: true,
  });
  const formattedDiaries = data.map((diary) => ({
    id: diary.id,
    title: diary.title || "Untitled",
    date: diary.createdAt,
    excerpt: diary.text.substring(0, 100) + "...", // Create excerpt from text
    image: diary.imageUrl || "https://via.placeholder.com/400x300", // Fallback image
  }));
  res.render("diary/my-diary", { entries: formattedDiaries });
};

// Description: Get single diary.
// Route: GET
// Access: Private

const getSingleDiary = async (req, res) => {
  const { id } = req.params;
  const diary = await Diary.findByPk(id);
  console.log(diary.dataValues, "diary");
  if (!diary) {
    return res.status(404).send("Diary not found.");
  }
  res.render("diary/one-diary", { diary: diary?.dataValues || {} });
};

// Description: Add new diary.
// Route: GET and POST /add-diary
// Access: Private

const addNewDiary = async (req, res) => {
  if (req.method === "GET") {
    res.render("diary/add-diary");
  } else if (req.method === "POST") {
    // Add new diary entry to the database
    console.log(req.body);
    try {
      const { imageUrl, text } = req.body;

      await Diary.create({
        imageUrl,
        text,
      });
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
};

// Description: Edit diary page.
// Route: GET
// Access: Private
const editDiaryPage = async (req, res) => {
  const { id } = req.params;
  const diary = await Diary.findByPk(id);
  console.log(diary.dataValues, "diary");
  if (!diary) {
    return res.status(404).send("Diary not found.");
  }
  res.render(`diary/add-diary`, { diary: diary?.dataValues || {} });
};

// Description: Edit diary.
// Route: POST
// Access: Private
const editDiary = async (req, res) => {
  const { id } = req.params;
  const { imageUrl, text } = req.body;
  try {
    await Diary.update({ imageUrl, text }, { where: { id } });
    res.redirect(`/diary/${id}`);
  } catch (error) {
    console.log(error);
  }
};

// Description: Delete diary.
// Route: POST
// Access: Private
const deleteDiary = async (req, res) => {
  const { id } = req.params;
  try {
    await Diary.destroy({ where: { id } });
    res.redirect(`/diary`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  editDiary,
  getMyDiary,
  addNewDiary,
  deleteDiary,
  editDiaryPage,
  getSingleDiary,
};
