// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract SimpleCollectable is ERC721, Ownable {
    uint256 public tokenCounter = 0;
    mapping (uint256 => string) private tokenMapper;


    constructor () public ERC721 ("testNFT", "testNFT"){

    }

    /**
    @notice set URI to tokenId
    @param tokenId token id to be set
    @param tokenURI URI to be pointed
    */
    function setTokenURI(uint256 tokenId, string memory tokenURI) public onlyOwner{
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        tokenMapper[tokenId] = tokenURI;
    }

    /**
    @notice Mint reserve tokenId
    */
    function mint() public returns  (uint256) {
        // Assign TokenId to the new owner
        // _safeMint funcation protect NFT replacement
        uint256 newTokenId = tokenCounter;
        _safeMint(
            msg.sender, // Address of who calls this function
            newTokenId // Token 0, 1, 2, ....
        );
        tokenCounter++;
        return newTokenId;
    }

    /**
    @notice A function to check whether token id is defined in the map
    @param tokenId Token id to check in the mapper
    */
    function isTokenIdDefinedInMapper(uint256 tokenId) public view returns (bool) {
        return bytes(tokenMapper[tokenId]).length == 0;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        if (isTokenIdDefinedInMapper(tokenId)){
            return tokenMapper[tokenId];
        }
        else{
            return "https://default";
        }
    }
}