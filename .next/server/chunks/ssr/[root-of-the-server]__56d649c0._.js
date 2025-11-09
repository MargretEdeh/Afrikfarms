module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/queryClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        }
    }
});
const __TURBOPACK__default__export__ = queryClient;
}),
"[project]/providers/queryProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queryClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/queryClient.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function QueryProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queryClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/providers/queryProvider.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/apiClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/apiClient.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://backend-api.afrikfarm.com/api/v1"),
    headers: {
        'Content-Type': 'application/json'
    }
});
apiClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const __TURBOPACK__default__export__ = apiClient;
}),
"[project]/services/auth.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthService",
    ()=>AuthService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-ssr] (ecmascript)");
;
const AuthService = {
    // Admin login
    loginAdmin: async (email, password)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/auth/admin-login", {
            email,
            password
        });
        return response.data;
    },
    // Normal user login (uses login_id instead of email)
    loginUser: async (login_id, password)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/auth/login", {
            login_id,
            password
        });
        return response.data;
    },
    registerSuperAdmin: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/auth/admin-register", data);
        return response.data;
    },
    createUser: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/create-user", data);
        return response.data;
    },
    getProfile: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/auth/me");
        return response.data;
    },
    getCountries: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/admin/countries");
        return response.data;
    },
    getStates: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/admin/states");
        return response.data;
    },
    getLgas: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/admin/lgas");
        return response.data;
    },
    logout: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/auth/admin-logout");
        return response.data;
    }
};
}),
"[project]/context/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/auth.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict`;
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop()?.split(';').shift() || '');
    }
    return null;
}
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check both localStorage and cookies for user data
        const savedUser = localStorage.getItem('user');
        const token = getCookie('token');
        if (savedUser && token) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);
    const login = async (identifier, password, type)=>{
        const data = type === 'admin' ? await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].loginAdmin(identifier, password) : await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].loginUser(identifier, password);
        console.log('Raw login response:', data);
        const responseUser = data.user || data.admin;
        const userData = {
            ...responseUser,
            token: data.token
        };
        setUser(userData);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(userData));
        setCookie('token', data.token, 7);
        const userRole = responseUser?.role;
        console.log('User role for routing:', userRole);
        setCookie('role', userRole, 7);
        switch(userRole){
            case 'lga_admin':
                router.push('/dashboard');
                break;
            case 'super_admin':
                router.push('/admin/dashboard');
                break;
            case 'state_admin':
                router.push('/state/dashboard');
                break;
            default:
                router.push('/dashboard');
                break;
        }
    };
    const registerSuperAdmin = async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].registerSuperAdmin(data);
        const userData = {
            ...res.admin || res.newAdmin,
            token: res.token
        };
        setUser(userData);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(userData));
        setCookie('token', res.token, 7); // Store in cookie for middleware
        router.push('/admin/dashboard');
    };
    const createUser = async (data)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].createUser(data);
    };
    const logout = ()=>{
        // Clear BOTH localStorage AND cookies
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        deleteCookie('token');
        queryClient.clear();
        setUser(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].logout();
        window.location.href = '/login';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            login,
            logout,
            registerSuperAdmin,
            createUser: async (data)=>await createUser(data)
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/AuthContext.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useAuth = ()=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
    return ctx;
};
}),
"[project]/services/lga.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LGAService",
    ()=>LGAService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-ssr] (ecmascript)");
;
const LGAService = {
    // Get LGA dashboard data
    getDashboard: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/lga/dashboard");
        return response.data;
    },
    // Create a new farmer
    createFarmer: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/lga/create-farmer", data);
        return response.data;
    },
    // Get all farmers
    getFarmers: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/lga/farmers");
        return response.data;
    },
    // Get a single farmer by ID
    getFarmerById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/lga/farmers/${id}`);
        return response.data;
    },
    // Send verification code to phone number
    sendCode: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/lga/send-code", data);
        return response.data;
    },
    // Verify code sent to phone number
    verifyCode: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/lga/verify-code", data);
        return response.data;
    },
    verifyNin: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/lga/verify-nin", data);
        return response.data;
    },
    uploadProfileImage: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/lga/upload-profile-image", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    UploadProofOfAddress: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/lga/upload-proof-of-address", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    getBanks: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/banks");
        return response.data;
    },
    updateFarmer: async (id, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/lga/farmers/${id}`, data);
        return response.data;
    },
    deleteFarmer: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/lga/farmers/${id}`);
        return response.data;
    },
    //farm endpint 
    getFarms: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/lga/farms");
        return response.data;
    },
    createFarm: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/lga/create-farm", data);
        return response.data;
    },
    deleteFarm: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/lga/delete-farm?farm_id=${id}`);
        return response.data;
    },
    updateFarm: async (id, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/lga/update-farm?farm_id=${id}`, data);
        return response.data;
    },
    getFarmById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/lga/get-farm?farm_id=${id}`);
        return response.data;
    },
    getFarmersFarms: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/lga/farmers-farms?farmer_id=${id}`);
        return response.data;
    },
    initializePayment: async (data)=>{
        console.log("=== PAYMENT INITIALIZATION DEBUG ===");
        console.log("1. Data received by service:", data);
        console.log("2. Data stringified:", JSON.stringify(data));
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/lga/initialize-payment", data);
            console.log("3. Full response received:", response);
            console.log("4. Response data:", response.data);
            // Return the full response data
            // The structure is likely: response.data contains { data: { authorization_url, reference }, message, status }
            return response.data;
        } catch (error) {
            console.error("4. Error caught in service:", error);
            console.error("5. Error response data:", error.response?.data);
            console.error("6. Error request data:", error.config?.data);
            throw error;
        }
    },
    verifyPayment: async (trxref, reference)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/lga/verify-payment?trxref=${trxref}&reference=${reference}`);
        return response.data;
    }
};
}),
"[project]/context/LgaContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LGAProvider",
    ()=>LGAProvider,
    "useLGA",
    ()=>useLGA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/lga.service.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LGAContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LGAProvider = ({ children })=>{
    const [farmers, setFarmers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [farms, setFarms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dashboard, setDashboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setError(null), []);
    // ✅ MEMOIZED functions to prevent re-creation on each render
    const fetchDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].getDashboard();
            setDashboard(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch dashboard data");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const fetchFarmers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].getFarmers();
            const farmersArray = response?.data || [];
            setFarmers(farmersArray);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farmers");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const getFarmerById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].getFarmerById(id);
            return data.farmer || data;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farmer");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const createFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].createFarmer(data);
            await fetchFarmers();
            return res;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create farmer");
            throw err;
        } finally{
            setLoading(false);
        }
    }, [
        fetchFarmers
    ]);
    const updateFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, data)=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].updateFarmer(id, data);
            await fetchFarmers();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update farmer");
            throw err;
        } finally{
            setLoading(false);
        }
    }, [
        fetchFarmers
    ]);
    const deleteFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].deleteFarmer(id);
            setFarmers((prev)=>prev.filter((f)=>f.id !== id));
        } catch (err) {
            setError(err.response?.data?.message || "Failed to delete farmer");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const fetchFarms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].getFarms();
            const farmsData = res.data || res.farms || res || [];
            setFarms(Array.isArray(farmsData) ? farmsData : []);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farms");
            setFarms([]);
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const getFarmById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].getFarmById(id);
            return data.farm || data;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farm");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const getFarmersFarms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (farmerId)=>{
        setLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].getFarmersFarms(farmerId);
            return data.farms || data;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farmer farms");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const createFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].createFarm(data);
            await fetchFarms();
            return res;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create farm");
            throw err;
        } finally{
            setLoading(false);
        }
    }, [
        fetchFarms
    ]);
    const updateFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, data)=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].updateFarm(id, data);
            await fetchFarms();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update farm");
            throw err;
        } finally{
            setLoading(false);
        }
    }, [
        fetchFarms
    ]);
    const deleteFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].deleteFarm(id);
            setFarms((prev)=>prev.filter((f)=>f.id !== id));
        } catch (err) {
            setError(err.response?.data?.message || "Failed to delete farm");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const sendCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].sendCode(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to send code");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const verifyCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].verifyCode(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to verify code");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const verifyNin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].verifyNin(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to verify NIN");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const initailizePayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].initializePayment(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to initialize payment");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const verifyPayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (trxref, reference)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LGAService"].verifyPayment(trxref, reference);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to verify payment");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LGAContext.Provider, {
        value: {
            farmers,
            farms,
            dashboard,
            loading,
            error,
            fetchDashboard,
            fetchFarmers,
            getFarmerById,
            createFarmer,
            updateFarmer,
            deleteFarmer,
            fetchFarms,
            getFarmById,
            getFarmersFarms,
            createFarm,
            updateFarm,
            deleteFarm,
            sendCode,
            verifyCode,
            verifyNin,
            initailizePayment,
            verifyPayment,
            clearError
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/LgaContext.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useLGA = ()=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LGAContext);
    if (!ctx) throw new Error("useLGA must be used within an LGAProvider");
    return ctx;
};
}),
"[project]/services/admin.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminService",
    ()=>AdminService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-ssr] (ecmascript)");
;
const AdminService = {
    // Get Admin dashboard data
    getDashboard: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/admin/dashboard");
        return response.data;
    },
    // Create a new farmer
    createFarmer: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/create-farmer", data);
        return response.data;
    },
    // Get all farmers
    getFarmers: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/admin/farmer/list-farmers");
        return response.data;
    },
    // Get a single farmer by ID
    getFarmerById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/admin/farmer/get-farmer?farmer_id=${id}`);
        return response.data;
    },
    // Send verification code to phone number
    sendCode: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/send-code", data);
        return response.data;
    },
    // Verify code sent to phone number
    verifyCode: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/verify-code", data);
        return response.data;
    },
    verifyNin: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/verify-nin", data);
        return response.data;
    },
    uploadProfileImage: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/upload-profile-image", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    UploadProofOfAddress: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/upload-proof-of-address", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    getBanks: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/banks");
        return response.data;
    },
    updateFarmer: async (id, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/admin/farmer/update-farmer?id=${id}`, data);
        return response.data;
    },
    deleteFarmer: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/admin/farmers/${id}`);
        return response.data;
    },
    // Farm endpoints 
    getFarms: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/admin/farm/list-farms");
        return response.data;
    },
    createFarm: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/farm/create-farm", data);
        return response.data;
    },
    deleteFarm: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/admin/delete-farm?farm_id=${id}`);
        return response.data;
    },
    updateFarm: async (id, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/admin/farm/update-farm?farm_id=${id}`, data);
        return response.data;
    },
    getFarmById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/admin/get-farm?farm_id=${id}`);
        return response.data;
    },
    getFarmersFarms: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/admin/farmers-farms?farmer_id=${id}`);
        return response.data;
    },
    // Payment endpoints
    initializePayment: async (data)=>{
        console.log("=== PAYMENT INITIALIZATION DEBUG ===");
        console.log("1. Data received by service:", data);
        console.log("2. Data stringified:", JSON.stringify(data));
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/admin/initialize-payment", data);
            console.log("3. Full response received:", response);
            console.log("4. Response data:", response.data);
            // Return the full response data
            // The structure is likely: response.data contains { data: { authorization_url, reference }, message, status }
            return response.data;
        } catch (error) {
            console.error("4. Error caught in service:", error);
            console.error("5. Error response data:", error.response?.data);
            console.error("6. Error request data:", error.config?.data);
            throw error;
        }
    },
    verifyPayment: async (trxref, reference)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/admin/verify-payment?trxref=${trxref}&reference=${reference}`);
        return response.data;
    },
    // Additional payment endpoints
    getPaymentRevenue: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/admin/payment/revenue");
        return response.data;
    },
    listPayments: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/admin/payment/list-payments");
        return response.data;
    }
};
}),
"[project]/context/AdminContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminProvider",
    ()=>AdminProvider,
    "useAdmin",
    ()=>useAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/admin.service.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AdminContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AdminProvider = ({ children })=>{
    const [farmers, setFarmers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [farms, setFarms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dashboard, setDashboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setError(null), []);
    const fetchDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].getDashboard();
            // Extract the nested data object
            setDashboard(response.data || response);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch dashboard data");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const fetchFarmers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].getFarmers();
            const farmersArray = response?.data || [];
            setFarmers(farmersArray);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farmers");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const getFarmerById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].getFarmerById(id);
            return data.farmer || data;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farmer");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const createFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].createFarmer(data);
            await fetchFarmers();
            return res;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create farmer");
            throw err;
        } finally{
            setLoading(false);
        }
    }, [
        fetchFarmers
    ]);
    const updateFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, data)=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].updateFarmer(id, data);
            await fetchFarmers();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update farmer");
            throw err;
        } finally{
            setLoading(false);
        }
    }, [
        fetchFarmers
    ]);
    const deleteFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].deleteFarmer(id);
            setFarmers((prev)=>prev.filter((f)=>f.id !== id));
        } catch (err) {
            setError(err.response?.data?.message || "Failed to delete farmer");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const fetchFarms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].getFarms();
            const farmsData = res.data || res.farms || res || [];
            setFarms(Array.isArray(farmsData) ? farmsData : []);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farms");
            setFarms([]);
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const getFarmById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].getFarmById(id);
            return data.farm || data;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farm");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const getFarmersFarms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (farmerId)=>{
        setLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].getFarmersFarms(farmerId);
            return data.farms || data;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch farmer farms");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const createFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].createFarm(data);
            await fetchFarms();
            return res;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create farm");
            throw err;
        } finally{
            setLoading(false);
        }
    }, [
        fetchFarms
    ]);
    const updateFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, data)=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].updateFarm(id, data);
            await fetchFarms();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update farm");
            throw err;
        } finally{
            setLoading(false);
        }
    }, [
        fetchFarms
    ]);
    const deleteFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].deleteFarm(id);
            setFarms((prev)=>prev.filter((f)=>f.id !== id));
        } catch (err) {
            setError(err.response?.data?.message || "Failed to delete farm");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const sendCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].sendCode(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to send code");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const verifyCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].verifyCode(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to verify code");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const verifyNin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].verifyNin(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to verify NIN");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const initailizePayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].initializePayment(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to initialize payment");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const verifyPayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (trxref, reference)=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].verifyPayment(trxref, reference);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to verify payment");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const getPaymentRevenue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].getPaymentRevenue();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch payment revenue");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    const listPayments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"].listPayments();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch payments list");
            throw err;
        } finally{
            setLoading(false);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminContext.Provider, {
        value: {
            farmers,
            farms,
            dashboard,
            loading,
            error,
            fetchDashboard,
            fetchFarmers,
            getFarmerById,
            createFarmer,
            updateFarmer,
            deleteFarmer,
            fetchFarms,
            getFarmById,
            getFarmersFarms,
            createFarm,
            updateFarm,
            deleteFarm,
            sendCode,
            verifyCode,
            verifyNin,
            initailizePayment,
            verifyPayment,
            getPaymentRevenue,
            listPayments,
            clearError
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/AdminContext.tsx",
        lineNumber: 376,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useAdmin = ()=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AdminContext);
    if (!ctx) throw new Error("useAdmin must be used within an AdminProvider");
    return ctx;
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__56d649c0._.js.map