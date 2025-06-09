# Skip Size Selector Redesign Code Challenge

## Overview

This project is a redesign of the "Choose your skip size" page from **We Want Waste**. The goal of this challenge was to completely redesign the UI while keeping the existing functionality intact, for a better **user experience (UX)**. Additionally, the page must be responsive and work well across both **desktop** and **mobile** devices.

The skip size data is fetched dynamically from the external API:  
[API Endpoint](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)

---
## Screenshots
![Skip Size Selector](./public/app.png)
---

## Approach & Design

### **1. Understanding the Problem**

The challenge was to redesign the "Choose your skip size" page while maintaining the **existing functionality**. The primary goals were:
- Redesign the page to be more **user-friendly**.
- Make the page **responsive** for both **desktop** and **mobile** devices.
- Fetch and display **skip size data** dynamically from an external API.

To tackle this, I focused on the following aspects:
- **Modularizing** the components for better maintainability.
- Ensuring the page is **responsive** and **mobile-friendly**.
- Providing a smooth, **error-free user experience**.

### **2. Component Structure**

I used **React functional components** to create a modular and maintainable solution. The app's key components are as follows:

1. **SkipSelector** (Parent Component):
   - Handles the **API call** via a custom hook (`useSkips`) that fetches data and caches it for 1 hour.
   - **Handles loading state** with a UX-friendly Skeleton Loader.
   - Passes the fetched skip data to the child component `SkipCategory`.

2. **SkipCategory** (Child Component):
   - Manages the **state** for the selected skip and unit (yards/meters).
   - Handles re-renders of child components upon dynamic value changes.
   - Displays the skip size options and allows users to select a skip size.

3. **SelectSkipSize** (Child Component):
   - Displays the skip options and allows users to select their desired skip size.
   - Handles unit conversions (e.g., yards to meters).
   - Passes the selected skip to the parent component (`SkipCategory`).
   
   **Props**:
   - `select`: Function that updates the selected skip in the parent state.
   - `skips`: Array of skip data to display.
   - `selected`: Currently selected skip object.
   - `setUnit`: Function to change the unit (yards/meters).
   - `unit`: Current unit for measurement (e.g., yards or meters).
   - `displayUnit`: The unit to be displayed (either yards or meters).

4. **SkipInfoCard** (Child Component):
   - Displays detailed information about the selected skip (e.g., size, Conditions , Price ...).
   - Updates dynamically based on the selected skip and unit.
   
   **Props**:
   - `unit`: Current unit for measurement.
   - `selected`: The selected skip object.
   - `displayUnit`: The unit to be displayed (either yards or meters).

5. **Loader/Error Handling**:
   - Displays a **Skeleton loading state** while the API call  is in progress .
   - Shows an **error message** if the API request fails or if there's an issue fetching data.

---

### **3. Fetching and Displaying Data**

The skip size data is fetched from the provided API using **Axios** and **React Query**. This approach ensures that the data is cached for infrequent updated server Data , and not re-fetched unnecessarily, improving performance and user experience.

Here’s the code for fetching and caching the skip data:

```js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSkips = async () => {
  const endpoint = import.meta.env.VITE_SKIPS_ENDPOINT;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch skips data');
  }
};

/**
 * Custom hook to fetch and cache skip data for 1 hour.
 * @returns {Object} Contains the loading, error, and data states.
 */
export const useSkips = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['skips'],
        queryFn: fetchSkips,
        staleTime: 1000 * 60 * 60, // 1 hour cache time
        cacheTime: 1000 * 60 * 60, // 1 hour cache duration
        retry: 1,
    });

    return { isLoading, error, data };
};
````
## Why I Chose `useState` and React Query Over Redux/Context for This Challenge

### Context
This challenge focuses on redesigning **Step 2** of a multi-step form (a stepper). Since this step is mostly isolated and has its own local state for managing the skip selection, I decided that using **`useState`** was the simplest and most efficient choice for managing state in this component.

### Reasons for Choosing `useState`:
- **Localized State**: The skip selection is local to Step 2, and no other part of the application requires access to this specific data. Therefore, **`useState`** is sufficient for the job.
- **Simplicity and Speed**: The goal of this challenge was to redesign Step 2 efficiently without over-complicating things. Using **`useState`** avoids the overhead of setting up **Redux** or **Context API**, which would add unnecessary boilerplate for such a small, isolated feature.
- **React Query for Data Fetching**: Since the skips data is being fetched from an API, I used **React Query** to handle caching, background refetching, and state management for remote data, making **Redux/Context unnecessary** for managing that particular state.

### What If This Were Part of a Larger App?
If the challenge had required building out the **entire flow** (i.e., steps 1 through 5 of the form), or if the data needed to be shared between different parts of the application, I would have likely opted for **Context** or **Redux** to manage global state across the entire app.

Here’s why:
- **Context API**: Great for **prop drilling** and sharing state between distant components. If the skip data or user’s form selections were needed across multiple steps, **Context** would be a good solution.
- **Redux Toolkit**: A more **robust solution** for managing **global state** in large applications, particularly if there’s a need for advanced state logic like asynchronous actions, or if you need to manage complex state across various steps in the flow.

But for this isolated step, **`useState`** and **React Query** are lightweight, easy-to-use solutions that do the job without unnecessary complexity.

