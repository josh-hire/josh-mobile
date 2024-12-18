
# Job for Swipe and Hiring
![Frame 123642](https://github.com/user-attachments/assets/a7674262-9e94-4a72-8b52-0fef372835c0)
## Prerequisites
   - Node.js (LTS)
   - Expo@latest
   - React Native
   - Android Emulator
## Get started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app on Android
   ```bash
    npx run android
   ```

### Project Structure
    JOSH
    ├── api                     # API endpoints
    ├── app                     # all pages for navigation
    ├── assets                  # fonts, icons, images, etc
    ├── components              # all components atom or molecule
    ├── configs                 # App configuration
    ├── constant				# all constant like colors and icons
    ├── hooks					# react hooks
    ├── modules					# main logic & state
    ├── store					# global state (zustand)
    ├── styles					# global style
    └── utils					# all utillity function
	
### Constant
    export  const  Colors  =  {
	    primary:  {
		    ...:  '#...',
		},
		secondary:  {
			...:  '#...',
		},
		...
	};

    export  const  Assets  =  {
	    icons:  {
	    },
	    fonts:  {
	    },
	    ...
    };

### Navigation

> example path: /(auth)/jobseeker/login

    app
    ├── (auth)                     # Auth pages
	    ├── jobseeker
		    ├── login.tsx
		    ...
	    ├── recruiter
	    ├── forgot-password.tsx
	    ...
    ├── (chat)                     # Chat pages
    ├── (home)                     # Home pages
    ├── (profile)                  # Profile pages
    ├── (tabs)                     # Bottom navigation bar
    ├── _layout.tsx				   # Main layout for the app
    ├── +html.tsx				
    ├── +not-found.tsx			   # Not found page
    └── index.tsx				   # Main entry

