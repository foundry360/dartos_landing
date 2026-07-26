import { IphoneEmulator } from "@/components/dev/IphoneEmulator";

export const metadata = {
  title: "iPhone Emulator",
  robots: { index: false, follow: false },
};

export default function EmulatorPage() {
  return <IphoneEmulator />;
}
