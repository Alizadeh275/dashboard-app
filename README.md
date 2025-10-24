# 📊 Analytics Dashboard Frontend

A modern analytics dashboard built with **React**, **TypeScript**, and **Chart.js**, featuring dynamic filters, aggregation visualizations, and responsive charts.

---

## 🚀 Features

- 📈 Dynamic dashboards  
- 🧮 Aggregation and dimension APIs integration  
- 🎨 Custom chart components (stacked and grouped bar charts)  
- 🧩 Modular architecture with reusable hooks and components  
- 🐳 Easy deployment via Docker  

---

## 📁 Project Structure

```
src
├── api
│   ├── aggregationApi.ts         # Handles API calls for aggregations
│   ├── config.ts                 # Base API configuration
│   └── dimensionsApi.ts          # Handles API calls for dimensions
├── components
│   ├── AnalyticsDashboard/       # Main dashboard page
│   ├── Charts/                   # Reusable chart components
│   ├── DataTable/                # Data table for showing results
│   ├── DynamicChart/             # Chart rendering logic
│   ├── FilterPanel/              # Filter controls for data
│   └── Title/                    # Page title component
├── hooks
│   ├── useAggregationData.ts     # Custom hook for fetching aggregation data
│   └── useDimensions.ts          # Custom hook for dimension data
├── utils
│   └── chartTransformers.ts      # Chart data transformation utilities
├── config/environment.ts         # Environment configuration
├── App.tsx / App.css             # App root
├── main.tsx                      # Entry point
└── index.css                     # Global styles
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/Alizadeh275/dashboard-app.git
cd dashboard-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐳 Docker Deployment

### Build and Run with Docker Compose
```bash
docker-compose up --build -d
```

This will:
- Build the production image from the `Dockerfile`
- Expose the frontend on **port 3000**
- Automatically restart the container unless stopped manually

### Stop containers
```bash
docker-compose down
```

---

## ⚡ Environment Variables

| Variable                       | Description           | Default      |
| ------------------------------ | --------------------- | ------------ |
| `NODE_ENV`                     | Node environment mode | `production` |
| *(You can add more as needed)* |                       |              |

---

## 🧠 Development Notes

- Use `src/api/config.ts` to change API base URLs.  
- Hooks under `src/hooks` provide reusable logic for data fetching.  
- Chart components use **Chart.js** for rendering visualizations.  

---

## 🧩 Future Enhancements

- Add user authentication  
- Support more chart types (Pie, Line, etc.)  
- Add dark/light mode  
- Integrate caching and pagination  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

### 🧑‍💻 Author
Developed by **Sajjad Alizadeh**  
📧 Contact: (your email or GitHub profile)
