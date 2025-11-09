(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/queryClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        }
    }
});
const __TURBOPACK__default__export__ = queryClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/providers/queryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queryClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/queryClient.ts [app-client] (ecmascript)");
"use client";
;
;
;
function QueryProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queryClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/providers/queryProvider.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/apiClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/apiClient.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://backend-api.afrikfarm.com/api/v1"),
    headers: {
        'Content-Type': 'application/json'
    }
});
apiClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
});
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/auth.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthService",
    ()=>AuthService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-client] (ecmascript)");
;
const AuthService = {
    // Admin login
    loginAdmin: async (email, password)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/admin-login", {
            email,
            password
        });
        return response.data;
    },
    // Normal user login (uses login_id instead of email)
    loginUser: async (login_id, password)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/login", {
            login_id,
            password
        });
        return response.data;
    },
    registerSuperAdmin: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/admin-register", data);
        return response.data;
    },
    createUser: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/admin/create-user", data);
        return response.data;
    },
    getProfile: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/auth/me");
        return response.data;
    },
    getCountries: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/admin/countries");
        return response.data;
    },
    getStates: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/admin/states");
        return response.data;
    },
    getLgas: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/admin/lgas");
        return response.data;
    },
    logout: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/admin-logout");
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/auth.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function setCookie(name, value) {
    let days = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = "".concat(name, "=").concat(encodeURIComponent(value), "; expires=").concat(expires, "; path=/; SameSite=Strict");
}
function getCookie(name) {
    const value = "; ".concat(document.cookie);
    const parts = value.split("; ".concat(name, "="));
    if (parts.length === 2) {
        var _parts_pop;
        return decodeURIComponent(((_parts_pop = parts.pop()) === null || _parts_pop === void 0 ? void 0 : _parts_pop.split(';').shift()) || '');
    }
    return null;
}
function deleteCookie(name) {
    document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
}
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = (param)=>{
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Check both localStorage and cookies for user data
            const savedUser = localStorage.getItem('user');
            const token = getCookie('token');
            if (savedUser && token) {
                setUser(JSON.parse(savedUser));
            }
            setLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const login = async (identifier, password, type)=>{
        const data = type === 'admin' ? await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthService"].loginAdmin(identifier, password) : await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthService"].loginUser(identifier, password);
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
        const userRole = responseUser === null || responseUser === void 0 ? void 0 : responseUser.role;
        console.log('User role for routing:', userRole);
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
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthService"].registerSuperAdmin(data);
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthService"].createUser(data);
    };
    const logout = ()=>{
        // Clear BOTH localStorage AND cookies
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        deleteCookie('token');
        queryClient.clear();
        setUser(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthService"].logout();
        window.location.href = '/login';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
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
        lineNumber: 148,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "YzLR7GuV/p73sF4tQ0GIyh06XfU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
    return ctx;
};
_s1(useAuth, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/lga.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LGAService",
    ()=>LGAService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-client] (ecmascript)");
;
const LGAService = {
    // Get LGA dashboard data
    getDashboard: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/lga/dashboard");
        return response.data;
    },
    // Create a new farmer
    createFarmer: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/lga/create-farmer", data);
        return response.data;
    },
    // Get all farmers
    getFarmers: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/lga/farmers");
        return response.data;
    },
    // Get a single farmer by ID
    getFarmerById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/lga/farmers/".concat(id));
        return response.data;
    },
    // Send verification code to phone number
    sendCode: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/lga/send-code", data);
        return response.data;
    },
    // Verify code sent to phone number
    verifyCode: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/lga/verify-code", data);
        return response.data;
    },
    verifyNin: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/lga/verify-nin", data);
        return response.data;
    },
    uploadProfileImage: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/lga/upload-profile-image", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    UploadProofOfAddress: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/lga/upload-proof-of-address", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    getBanks: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/banks");
        return response.data;
    },
    updateFarmer: async (id, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/lga/farmers/".concat(id), data);
        return response.data;
    },
    deleteFarmer: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/lga/farmers/".concat(id));
        return response.data;
    },
    //farm endpint 
    getFarms: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/lga/farms");
        return response.data;
    },
    createFarm: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/lga/create-farm", data);
        return response.data;
    },
    deleteFarm: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/lga/delete-farm?farm_id=".concat(id));
        return response.data;
    },
    updateFarm: async (id, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/lga/update-farm?farm_id=".concat(id), data);
        return response.data;
    },
    getFarmById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/lga/get-farm?farm_id=".concat(id));
        return response.data;
    },
    getFarmersFarms: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/lga/farmers-farms?farmer_id=".concat(id));
        return response.data;
    },
    initializePayment: async (data)=>{
        console.log("=== PAYMENT INITIALIZATION DEBUG ===");
        console.log("1. Data received by service:", data);
        console.log("2. Data stringified:", JSON.stringify(data));
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/lga/initialize-payment", data);
            console.log("3. Full response received:", response);
            console.log("4. Response data:", response.data);
            // Return the full response data
            // The structure is likely: response.data contains { data: { authorization_url, reference }, message, status }
            return response.data;
        } catch (error) {
            var _error_response, _error_config;
            console.error("4. Error caught in service:", error);
            console.error("5. Error response data:", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
            console.error("6. Error request data:", (_error_config = error.config) === null || _error_config === void 0 ? void 0 : _error_config.data);
            throw error;
        }
    },
    verifyPayment: async (trxref, reference)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/lga/verify-payment?trxref=".concat(trxref, "&reference=").concat(reference));
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/LgaContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LGAProvider",
    ()=>LGAProvider,
    "useLGA",
    ()=>useLGA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/lga.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LGAContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LGAProvider = (param)=>{
    let { children } = param;
    _s();
    const [farmers, setFarmers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [farms, setFarms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dashboard, setDashboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[clearError]": ()=>setError(null)
    }["LGAProvider.useCallback[clearError]"], []);
    // ✅ MEMOIZED functions to prevent re-creation on each render
    const fetchDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[fetchDashboard]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].getDashboard();
                setDashboard(data);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to fetch dashboard data");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[fetchDashboard]"], []);
    const fetchFarmers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[fetchFarmers]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].getFarmers();
                const farmersArray = (response === null || response === void 0 ? void 0 : response.data) || [];
                setFarmers(farmersArray);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to fetch farmers");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[fetchFarmers]"], []);
    const getFarmerById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[getFarmerById]": async (id)=>{
            setLoading(true);
            setError(null);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].getFarmerById(id);
                return data.farmer || data;
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to fetch farmer");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[getFarmerById]"], []);
    const createFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[createFarmer]": async (data)=>{
            setLoading(true);
            setError(null);
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].createFarmer(data);
                await fetchFarmers();
                return res;
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to create farmer");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[createFarmer]"], [
        fetchFarmers
    ]);
    const updateFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[updateFarmer]": async (id, data)=>{
            setLoading(true);
            setError(null);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].updateFarmer(id, data);
                await fetchFarmers();
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update farmer");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[updateFarmer]"], [
        fetchFarmers
    ]);
    const deleteFarmer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[deleteFarmer]": async (id)=>{
            setLoading(true);
            setError(null);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].deleteFarmer(id);
                setFarmers({
                    "LGAProvider.useCallback[deleteFarmer]": (prev)=>prev.filter({
                            "LGAProvider.useCallback[deleteFarmer]": (f)=>f.id !== id
                        }["LGAProvider.useCallback[deleteFarmer]"])
                }["LGAProvider.useCallback[deleteFarmer]"]);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to delete farmer");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[deleteFarmer]"], []);
    const fetchFarms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[fetchFarms]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].getFarms();
                const farmsData = res.data || res.farms || res || [];
                setFarms(Array.isArray(farmsData) ? farmsData : []);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to fetch farms");
                setFarms([]);
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[fetchFarms]"], []);
    const getFarmById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[getFarmById]": async (id)=>{
            setLoading(true);
            setError(null);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].getFarmById(id);
                return data.farm || data;
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to fetch farm");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[getFarmById]"], []);
    const getFarmersFarms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[getFarmersFarms]": async (farmerId)=>{
            setLoading(true);
            setError(null);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].getFarmersFarms(farmerId);
                return data.farms || data;
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to fetch farmer farms");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[getFarmersFarms]"], []);
    const createFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[createFarm]": async (data)=>{
            setLoading(true);
            setError(null);
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].createFarm(data);
                await fetchFarms();
                return res;
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to create farm");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[createFarm]"], [
        fetchFarms
    ]);
    const updateFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[updateFarm]": async (id, data)=>{
            setLoading(true);
            setError(null);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].updateFarm(id, data);
                await fetchFarms();
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update farm");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[updateFarm]"], [
        fetchFarms
    ]);
    const deleteFarm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[deleteFarm]": async (id)=>{
            setLoading(true);
            setError(null);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].deleteFarm(id);
                setFarms({
                    "LGAProvider.useCallback[deleteFarm]": (prev)=>prev.filter({
                            "LGAProvider.useCallback[deleteFarm]": (f)=>f.id !== id
                        }["LGAProvider.useCallback[deleteFarm]"])
                }["LGAProvider.useCallback[deleteFarm]"]);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to delete farm");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[deleteFarm]"], []);
    const sendCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[sendCode]": async (data)=>{
            setLoading(true);
            setError(null);
            try {
                return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].sendCode(data);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to send code");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[sendCode]"], []);
    const verifyCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[verifyCode]": async (data)=>{
            setLoading(true);
            setError(null);
            try {
                return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].verifyCode(data);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to verify code");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[verifyCode]"], []);
    const verifyNin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[verifyNin]": async (data)=>{
            setLoading(true);
            setError(null);
            try {
                return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].verifyNin(data);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to verify NIN");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[verifyNin]"], []);
    const initailizePayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[initailizePayment]": async (data)=>{
            setLoading(true);
            setError(null);
            try {
                return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].initializePayment(data);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to initialize payment");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[initailizePayment]"], []);
    const verifyPayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LGAProvider.useCallback[verifyPayment]": async (trxref, reference)=>{
            setLoading(true);
            setError(null);
            try {
                return await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$lga$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LGAService"].verifyPayment(trxref, reference);
            } catch (err) {
                var _err_response_data, _err_response;
                setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to verify payment");
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["LGAProvider.useCallback[verifyPayment]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LGAContext.Provider, {
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
_s(LGAProvider, "WQAbQHfyczLH/ls2Bo6mchozB0U=");
_c = LGAProvider;
const useLGA = ()=>{
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LGAContext);
    if (!ctx) throw new Error("useLGA must be used within an LGAProvider");
    return ctx;
};
_s1(useLGA, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "LGAProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7150fe9a._.js.map