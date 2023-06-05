import { useDispatch, useSelector } from "react-redux"
import { closeSearchWindow, setSearchValue } from "@/redux/slice/search/searchSlice";
import { useEffect, useState } from "react";
import { issuesList } from "./issuesData";
import IssueCard from "./IssueCard";


export default function IssuesWindow(){
        const dispatch = useDispatch()

        const searchValue = useSelector((state) => state.search.searchWord)

        const [sortedIssues, setSortedIssues] = useState(issuesList)
        const [selectedSortRule, setSelectedSortRule] = useState('none')
        const [searchIssuesResult, setSearchIssuesResult] = useState(sortedIssues)

        const sortIssuesByUpvote = (sortRule) => {
            setSelectedSortRule(sortRule)
    
            if(sortRule === 'most_upvotes'){
                setSortedIssues(issuesList.sort((a, b) => b.upvotes - a.upvotes))
            } 
            else if(sortRule === 'least_upvotes'){
                setSortedIssues(issuesList.sort((a, b) => a.upvotes - b.upvotes))
            }
            else{
                setSortedIssues(issuesList)
            }          
        }
    
        const searchIssues = () => {
            const searchResults = sortedIssues.filter(issue => issue.title.toLowerCase().includes(searchValue.toLowerCase()));
            setSearchIssuesResult(searchResults)
        }

        useEffect(() => {
            searchIssues()
        }, [searchValue, selectedSortRule])

    return (
        <div className="h-full overflow-hidden relative">
            <div className='bg-gray-100 p-4 z-20 h-full w-full absolute top-0 left-0 opacity-[.98] overflow-y-scroll overflow-x-hidden'>
                <div className="flex justify-end sticky top-0">
                    <button data-testid='close-btn' onClick={() => {
                            dispatch(setSearchValue(''))
                            dispatch(closeSearchWindow())
                        }}
                        className="bg-red-500 opacity-100 px-4 py-1 mr-4 rounded text-white font-semibold"
                    >Close</button>
                </div>

                {/* filters */}
                <div className="mt-6 flex justify between">
                    <h5 className="font-semibold text-lg w-1/3">Filters</h5>

                    <div className="w-1/3 flex flex-col">
                        <label className="text-lg font-semibold">Sort by:</label>
                        <select className="w-fit px-4 py-2 rounded" value={selectedSortRule} onChange={(e) => sortIssuesByUpvote(e.target.value)}>
                            <option value="none">None</option>
                            <option value="most_upvotes">Most upvotes</option>
                            <option value="least_upvotes">Least upvotes</option>
                        </select>
                    </div>

                    <div className="w-1/3 flex flex-col">
                        <label className="text-lg font-semibold">Filter by:</label>
                        <select className="w-fit px-4 py-2 rounded">
                            <option value="none">None</option>
                            <option value="one week ago">One week ago</option>
                            <option value="two week ago">Two weeks ago</option>
                        </select>
                    </div>
                </div>
                
                <div data-testid='issues-window' className="flex flex-wrap gap-4 mt-12">
                    {
                        searchIssuesResult.map((issue, id) => (
                            <IssueCard key={id} issue={issue} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}