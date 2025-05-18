import Button from "../components/Button/Button.tsx";
import Dropdown from "../components/Form/Dropdown.tsx";
import FormInput from "../components/Form/FormInput.tsx";
import Post from "../components/Post/Post.tsx";

const categories = [
    "Vardag med djur",
    "Foder & Hälsa",
    "Träning & Beteende",
    "Prylprat",
    "Kattnätet",
    "Hundsnack",
    "Veterinärhörnan",
    "FurEver Lounge",
];

const tags = [
    "valp",
    "kattunge",
    "seniorhund",
    "barf",
    "kastrering",
    "hundträning",
    "kattträning",
    "försvunnetdjur",
    "hundmöten",
    "kattlåda",
    "tipsotricks",
];

const Forum = () => {
    return (
        <div className="flex flex-col min-h-screen gap-8">
            <div className="flex flex-col py-8 px-6 bg-aquamarine-900 border-2 rounded-xl mt-8 mb-4 mx-4 gap-4">
                <div className="mb-8">
                    <div className="flex flex-col gap-4 mb-8">
                        <Dropdown items={categories} title="Alla kategorier" />
                        <Dropdown items={tags} title="Tags" />
                        <FormInput
                            placeholder="Sök ämne eller inlägg ..."
                            type="search"
                            name="search"
                            onChange={() => console.log("searching")}
                            value=""
                        />
                    </div>
                    <div>
                        <Button
                            design="outline"
                            className="bg-chinese_violet-800 hover:bg-chinese_violet-700"
                        >
                            Starta ny tråd
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mb-2">
                    <Post />
                </div>
            </div>
        </div>
    );
};

export default Forum;
