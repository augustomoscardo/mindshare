import { useAuthStore } from "@/stores/auth";
import logoIcon from "@/assets/logo.svg";

export function Header() {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <div className="w-full px-16 pt-6">
      {isAuthenticated && (
        <div className="flex justify-between width-full">
          <div className="min-w-48">
            <img src={logoIcon} alt="Logo" />
          </div>
        </div>
      )}
    </div>
  );
}
